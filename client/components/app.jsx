import React from 'react';
import Initial from './initial';
import Login from './login';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true,
      view: {
        name: 'init',
        params: {}
      }
  }
  this.setView = this.setView.bind(this);
  this.login = this.login.bind(this);
  this.signUp = this.signUp.bind(this);
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
      user: {
        firstname: '',
        userId: null
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
          console.log('incorrect user_email / user_password combo');
        } else {
          return response.json();
        }
      })
      .then(result => {
        this.setState({ user: {
          firstname: result[0].username,
          userId: result[0].user_id
        }})
      })
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
        this.setState({ user: {
          firstname: result.username,
          userId: result.user_id
        }})
      })
  }

  render() {
    const s = (this.state.view.name === 'init')
      ? <Initial setView={this.setView}/>
      : (this.state.view.name === 'login')
        ? <Login/>
        : null

    return (
      <div>
        {s}
      </div>
    )
  }
}
