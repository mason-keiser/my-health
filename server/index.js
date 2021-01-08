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
