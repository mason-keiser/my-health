import React from 'react';

export default class Login extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(callback) {
        event.preventDefault();
        const obj = {
            email: this.state.email.toLowerCase(),
            password: this.state.password
          };
        const req = document.getElementById('required')
        if (obj.email === '') {
            document.getElementById('email').style.borderColor = 'red'
            req.textContent = '* red fields are required for login'
            req.style.color = 'red'
        } if (obj.password === '') {
            document.getElementById('password').style.borderColor = 'red'
            req.textContent = '* red fields are required for login'
            req.style.color = 'red'
        } else{
          callback(obj);
        }
      }
    
    handleChange(event) {
        if (event.target.id === 'email') {
          this.setState({ email: event.target.value });
        }
        if (event.target.id === 'password') {
          this.setState({ password: event.target.value });
        }
    }

    render() {
        return(
            <div>
                <h1 className="title" onClick={() => this.props.setView('init',{})}>My Health ♡</h1>
                <h2 className='title2'> Login </h2>
                <form onSubmit={() => this.handleSubmit(this.props.login)}>
                    <div className='form-group'>
                        <input type="text" autoComplete='current-username' placeholder='Email' name='email' className="" id='email' onChange={this.handleChange}/>
                    </div>
                    <div className='form-group'>
                        <input type="password" placeholder='Password' autoComplete='current-password' name='password' className="" id='password' onChange={this.handleChange}/>
                    </div>
                    <div id="required" className="required"></div>
                    <div className='loginButton'>
                         <button type='submit' className='btn mt-2'>Login</button>
                    </div>
                </form>
                <h4 className='needacc' onClick={() => this.props.setView('signup', {})}>Need an account? Click here..</h4>
                <h5 className='or mt-3'>or</h5>
                <h4 className='guest mt-4' onClick={() => this.props.setView('main', {}, this.props.loginAsGuest())}>Enter as Guest</h4>
            </div>
        )
    }
} 