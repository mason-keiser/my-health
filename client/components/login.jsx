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
        console.log('works')
        callback(obj)
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
                        <input type="text" placeholder='Email' name='email' className="" id='email' onChange={this.handleChange}/>
                    </div>
                    <div className='form-group'>
                        <input type="password" placeholder='Password' name='password' className="" id='password' onChange={this.handleChange}/>
                    </div>
                    <div className='loginButton'>
                         <button type='submit' className='btn mt-2'>Login</button>
                    </div>
                </form>
                <h3 className='needacc' onClick={() => this.props.setView('signup', {})}>Need an account? Click here..</h3>
            </div>
        )
    }
} 