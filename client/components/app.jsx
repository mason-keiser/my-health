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
import Treatment from './treatment';
import Treatment_History from './treatment_history';
import Treatment_Entry from './treatment_entry';

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
  this.postJournal = this.postJournal.bind(this);
  this.loginAsGuest = this.loginAsGuest.bind(this);
  this.postTx = this.postTx.bind(this);
}

  componentDidMount() {
    fetch('/api/health-check')
      .then(res => res.json())
      .then(data => this.setState({ message: data.message || data.error }))
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isLoading: false }));
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
          null
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

  loginAsGuest() {
    this.setState({
      user: {
        firstname: 'Guest',
        user_id: 5
      }
    })
  }

  postTx(txInfo) {
    fetch('/api/posttx', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(txInfo)
    })
    .then(response => {
      if (response.status === 400 || response.status === 404) {
        console.log('failed post');
      } else {
        return response.json();
      }
    })
   this.setView('treatment_history')
  }

  render() {
    const s = (this.state.view.name === 'init')
      ? <Initial setView={this.setView}/>
      : (this.state.view.name === 'login')
        ? <Login setView = {this.setView} loginAsGuest={this.loginAsGuest} login={this.login}/>
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
                          : (this.state.view.name === 'treatment')
                            ? <Treatment postTx={this.postTx} setView={this.setView} user={this.state.user}/>
                            : (this.state.view.name === 'treatment_history')
                              ? <Treatment_History user={this.state.user} setView={this.setView}/>
                              : (this.state.view.name === 'treatment_entry')
                                ? <Treatment_Entry setView={this.setView} view={this.state.view}/>
                                : null
    return (
      <div>
        {s}
      </div>
    )
  }
}
