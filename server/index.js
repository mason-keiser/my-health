require('dotenv/config');
const express = require('express');

const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);

app.use(express.json());

app.get('/api/health-check', (req, res, next) => {
  db.query(`select 'successfully connected' as "message"`)
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

//  SIGN UP API POST REQUEST THAT ADDS USER INFO TO DB

app.post('/api/signUp/', (req, res, next) => {
  if (!req.body.username) {
    return next(new ClientError('Missing required username field', 400));
  }
  if (!req.body.email) {
    return next(new ClientError('Missing required email field', 400));
  }
  if (!req.body.password) {
    return next(new ClientError('Missing required password field', 400));
  }
  const sql = `
  INSERT INTO "users" ("username", "email", "password")
  VALUES                  ($1, $2, $3)
  RETURNING *;
  `;
  const params = [req.body.username, req.body.email, req.body.password];
  db.query(sql, params)
    .then(result => {
      const row = result.rows[0];
      res.status(201).json(row);
    });
});

//  SEARCH DATABASE FOR EXISTING EMAIL AND PASSWORD API GET REQUEST

app.get('/api/login/:email/:password', (req, res, next) => {
  const email = req.params.email;
  const password = req.params.password;
  const sql = `
  SELECT * FROM "users"
  WHERE "email" = $1 
  AND "password" = $2;
  `;
  const params = [req.params.email, req.params.password];
  db.query(sql, params)
    .then(result => {
      if (!result.rows[0]) {
        return res.status(400).json({ message: `No user information contains: ${email} or ${password}` });
      } else {
        return res.status(200).json(result.rows);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

// SEARCH DATABASE FOR ALL PAIN NOTES BY USERID

app.get('/api/painnotes/:user_id', (req, res, next) => {
  const user_id = req.params.user_id;
  const sql = `
  SELECT * FROM "pain_notes"
  WHERE "user_id" = $1
  `
  const params = [req.params.user_id]
  db.query(sql, params)
    .then(result => {
      if (!result.rows[0]) {
        return res.status(400).json({ message: `No user notes are attached to acct # : ${user_id}` });
      } else {
        return res.status(200).json(result.rows);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
})

// POST INTO NOTES DB 

app.post('/api/postpain', (req, res, next) => {
  const user_id = req.body.user_id;
  const date_id = req.body.date_id;
  const pain_level = req.body.pain_level;
  const mood_level = req.body.mood_level;
  const pain_note = req.body.pain_note

  if (!user_id) {
    return res.status(400).json({ error: 'all notes must have user_id' });
  }
  if (!date_id) {
    return res.status(400).json({ error: 'all notes must have date_id' });
  }
  if (!pain_level) {
    return res.status(400).json({ error: 'all notes must have pain_level' });
  }
  if (!mood_level) {
    return res.status(400).json({ error: 'all notes must have mood_level' });
  }
  if (!pain_note) {
    return res.status(400).json({ error: 'all notes must have pain_note' });
  }

  const sql = `
  INSERT INTO "pain_notes" ("user_id", "date_id", "pain_level", "mood_level", "pain_note")
  VALUES ($1, $2, $3, $4, $5)
  RETURNING *
  `
  const params = [user_id, date_id, pain_level, mood_level, pain_note];
  db.query(sql, params)
    .then(result => {
      if (!result) {
        return res.status(400).json({ message: `There has been an error trying to post the note` });
      } else {
        return res.status(200).json(result.rows);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
})

// GET ALL JOURNAL ENTRIES BY USER_ID

app.get('/api/journal/:user_id', (req, res, next) => {
  const user_id = req.body.user_id;
  const sql = `
  SELECT * FROM "journals"
  WHERE "user_id" = $1
  `
  const params = [req.params.user_id]
  db.query(sql, params)
    .then(result => {
      if (!result.rows[0]) {
        return res.status(400).json({ message: `No user journals are attached to acct # : ${user_id}` });
      } else {
        return res.status(200).json(result.rows);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
})

// POST JOURNAL ENTRY TO DB

app.post('/api/postjournal', (req, res, next) => {
  const user_id = req.body.user_id;
  const date_id = req.body.date_id;
  const journal = req.body.journal;

  if (!user_id) {
    return res.status(400).json({ error: 'all notes must have user_id' });
  }
  if (!date_id) {
    return res.status(400).json({ error: 'all notes must have date_id' });
  }
  if (!journal) {
    return res.status(400).json({ error: 'all notes must have journal entry' });
  }

  const sql = `
  INSERT INTO "journals" ("user_id", "date_id", "journal")
  VALUES ($1, $2, $3)
  RETURNING *
  `
  const params = [user_id, date_id, journal];
  db.query(sql, params)
    .then(result => {
      if (!result) {
        return res.status(400).json({ message: `There has been an error trying to post the journal entry` });
      } else {
        return res.status(200).json(result.rows);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
})

// POST TX ENTRY INTO DB

app.post('/api/posttx', (req, res, next) => {
  const user_id = req.body.user_id;
  const date_id = req.body.date_id;
  const mb_therapy = req.body.mb_therapy;
  const ch_therapy = req.body.ch_therapy;
  const meds = req.body.meds;
  const p_therapy = req.body.p_therapy

  if (!user_id) {
    return res.status(400).json({ error: 'all daily tx must have user_id' });
  }
  if (!date_id) {
    return res.status(400).json({ error: 'all daily tx must have date_id' });
  }

  const sql = `
  INSERT INTO "treatments" ("user_id", "date_id", "mb_therapy", "p_therapy", "ch_therapy", "meds")
  VALUES ($1, $2, $3, $4, $5, $6)
  RETURNING *
  `
  const params = [user_id, date_id, mb_therapy, p_therapy, ch_therapy, meds];
  db.query(sql, params)
    .then(result => {
      if (!result) {
        return res.status(400).json({ message: `There has been an error trying to post the tx entry` });
      } else {
        return res.status(200).json(result.rows);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
})

// SEARCH DB FOR ALL TX

app.get('/api/tx/:user_id', (req, res, next) => {
  const user_id = req.body.user_id;
  const sql = `
  SELECT * FROM "treatments"
  WHERE "user_id" = $1
  `
  const params = [req.params.user_id]
  db.query(sql, params)
    .then(result => {
      if (!result.rows[0]) {
        return res.status(400).json({ message: `No user treatments are attached to acct # : ${user_id}` });
      } else {
        return res.status(200).json(result.rows);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
})

// DELETE FROM JOURNALS TABLE API

app.delete('/api/deleteJournal', (req, res ,next) => {
  const journal_id = req.body.journal_id;
  const sqlQuery = `
          DELETE FROM journals
                WHERE journal_id = $1
                RETURNING *
        `;
  const params = [journal_id];

  db.query(sqlQuery, params)
    .then(result => {
      res.status(202).json({
        message: 'Journal entry deleted successfully',
        checklistitemid: result.rows[0].journal_id 
      })
      return result
    })
    .catch(err => next(err));
})

// DELETE FROM PAIN_NOTES TABLE API

app.delete('/api/deletePainNote', (req, res ,next) => {
  const note_id = req.body.note_id;
  const sqlQuery = `
          DELETE FROM pain_notes
                WHERE note_id = $1
                RETURNING *
        `;
  const params = [note_id];

  db.query(sqlQuery, params)
    .then(result => {
      res.status(202).json({
        message: 'Journal entry deleted successfully',
        checklistitemid: result.rows[0].note_id 
      })
      return result
    })
    .catch(err => next(err));
})

// DELETE FROM TREATMENTS TABLE API

app.delete('/api/deleteTx', (req, res ,next) => {
  const tx_id = req.body.tx_id;
  const sqlQuery = `
          DELETE FROM treatments
                WHERE tx_id = $1
                RETURNING *
        `;
  const params = [tx_id];

  db.query(sqlQuery, params)
    .then(result => {
      res.status(202).json({
        message: 'Journal entry deleted successfully',
        checklistitemid: result.rows[0].tx_id 
      })
      return result
    })
    .catch(err => next(err));
})

// GET FROM ACTIVITIES TABLE API

app.get('/api/activities/:user_id', (req, res, next) => {
  const user_id = req.params.user_id;
  const sql = `
  SELECT * FROM "activities"
  WHERE "user_id" = $1
  `
  const params = [user_id]
  db.query(sql, params)
    .then(result => {
      if (!result.rows[0]) {
        return res.status(400).json({ message: `No user activites are attached to acct # : ${user_id}` });
      } else {
        return res.status(200).json(result.rows);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
})

// POST INTO ACTIVITIES TABLE API

app.post('/api/postact', (req, res, next) => {
  const user_id = req.body.user_id;
  const date_id = req.body.date_id;
  const activity_name = req.body.activity_name;
  const activity_description = req.body.activity_description;


  if (!user_id) {
    return res.status(400).json({ error: 'all activity entries must have user_id' });
  }
  if (!date_id) {
    return res.status(400).json({ error: 'all activity entries must have date_id' });
  }
  if (!activity_name) {
    return res.status(400).json({ error: 'all activity entries must have activity_name' });
  }

  const sql = `
  INSERT INTO "activities" ("user_id", "date_id", "activity_name","activity_description")
  VALUES ($1, $2, $3, $4)
  RETURNING *
  `
  const params = [user_id, date_id, activity_name, activity_description];
  db.query(sql, params)
    .then(result => {
      if (!result) {
        return res.status(400).json({ message: `There has been an error trying to post the activity entry` });
      } else {
        return res.status(200).json(result.rows);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
})


app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
