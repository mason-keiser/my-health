import React from 'react';
import Initial from './initial';
import Login from './login';
import Signup from './signup';
import Welcome from './welcome';
import Main from './main';
import Pain from './pain'
import Pain_History from './pain_history';
import Pain_Note from './pain_note';
import Journal from './journal';
import Journal_History from './journal_history';
import Journal_Entry from './journal_entry';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true,
      view: {
        name: 'init',
        params: {}
      },
      user: {
        firstname: '',
        user_id: null
      },
      pain_notes: 0
  }
  this.setView = this.setView.bind(this);
  this.login = this.login.bind(this);
  this.signUp = this.signUp.bind(this);
  this.postPain = this.postPain.bind(this);
  this.getPainNotes = this.getPainNotes.bind(this);
  this.postJournal = this.postJournal.bind(this);
}

  componentDidMount() {
    fetch('/api/health-check')
      .then(res => res.json())
      .then(data => this.setState({ message: data.message || data.error }))
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isLoading: false }));
      this.getPainNotes()
  }
  
  componentDidUpdate() {
    if (this.state.pain_notes === undefined) {
      null
    } else {
      this.getPainNotes()
    }
  }

  setView(names, params) {
    this.setState({
      view: {
        name: names,
        params: params
      },
    });
  }

  login(loginInfo) {
    const email = loginInfo.email;
    const password = loginInfo.password;
    fetch('/api/login/' + email + '/' + password, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json'}
    })
      .then(response => {
        if (response.status === 400 || response.status === 404) {
          this.setState({
            pain_notes: null
          })
        } else {
          return response.json();
        }
      })
      .then(result => {
        if (!result) {
          null
        } else {
        this.setState({ user: {
          firstname: result[0].username,
          user_id: result[0].user_id
        }})
      this.setView('main', {})
    }})
  }

  signUp(signupInfo) {
    fetch('/api/signUp/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(signupInfo)
    })
      .then(response => {
        if (response.status === 400 || response.status === 404) {
          const e = document.getElementById('user_email');
          e.style.borderColor = 'red';
          const p = document.getElementById('user_password');
          p.style.borderColor = 'red';
          const u = document.getElementById('user_first');
          u.style.borderColor = 'red';
          const f = document.getElementById('user_last');
          f.style.borderColor = 'red';
        } else {
          return response.json();
        }
      })
      .then(result => {
        if (!result) {
          null 
        } else {
          this.setState({ 
            user: {
              firstname: result.username,
              user_id: result.user_id
        }})
    this.setView('welcome', {})
      }})
  }

  postPain(noteInfo) {
    fetch('/api/postpain', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(noteInfo)
    })
    .then(response => {
      if (response.status === 400 || response.status === 404) {
        console.log('failed post');
      } else {
        return response.json();
      }
    })
   this.setView('pain_history')
  }

  getPainNotes(){
    const id = Number(this.state.user.user_id)
    if (this.state.view.name === 'main' && this.state.user.user_id !== null) {
      fetch(`/api/painnotes/${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'}
      })
        .then(response => {
          if (response.status === 400 || response.status === 404) {
          console.log("couldn't fetch notes");
            return
          } else {
            return response.json();
          }
        })
      .then(result => {
        this.setState({
          pain_notes: result
        })
      })
    }
  }

  postJournal(journalInfo) {
    fetch('/api/postjournal', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(journalInfo)
    })
    .then(response => {
      if (response.status === 400 || response.status === 404) {
        console.log('failed post');
      } else {
        return response.json();
      }
    })
   this.setView('journal_history')
  }

  render() {
    const s = (this.state.view.name === 'init')
      ? <Initial setView={this.setView}/>
      : (this.state.view.name === 'login')
        ? <Login setView = {this.setView} login={this.login}/>
        : (this.state.view.name === 'signup')
          ? <Signup setView={this.setView} signUp={this.signUp}/>
          : (this.state.view.name === 'welcome')
            ? <Welcome setView = {this.setView}/>
            : (this.state.view.name === 'main')
              ? <Main setView={this.setView} user={this.state.user} getPainNotes ={this.getPainNotes}/>
              : (this.state.view.name === 'pain')
                ? <Pain setView={this.setView} user={this.state.user} postPain={this.postPain}/>
                : (this.state.view.name === 'pain_history')
                  ? <Pain_History setView={this.setView} pain_notes={this.state.pain_notes} user={this.state.user}/>
                  : (this.state.view.name === 'pain_note')
                    ? <Pain_Note setView={this.setView} view={this.state.view}/>
                    : (this.state.view.name === 'journal')
                      ? <Journal setView={this.setView} postJournal={this.postJournal} user={this.state.user} />
                      : (this.state.view.name === 'journal_history')
                        ? <Journal_History setView = {this.setView} user={this.state.user}/>
                        : (this.state.view.name === 'journal_entry')
                          ? <Journal_Entry view={this.state.view} setView={this.setView}/>
                          : null

    return (
      <div>
        {s}
      </div>
    )
  }
}
