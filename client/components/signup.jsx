import React from 'react';

export default class Signup extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };
    }

    
handleSubmit(callback) {
    event.preventDefault();
    const obj = {
      username: this.state.username,
      email: this.state.email.toLowerCase(),
      password: this.state.password,
    };
    callback(obj)
}

handleChange(event) {
    if (event.target.id === 'username') {
      this.setState({ username: event.target.value });
    }
    if (event.target.id === 'email') {
      this.setState({ email: event.target.value})
    }
    if (event.target.id === 'first_password') {
      this.setState({ first_password: event.target.value });
    }
    if (event.target.id === 'second_password') {
      this.setState({ second_password: event.target.value });
    }
}

    render() {
        return(
            <div>
                <h1 className="title">My Health ♡</h1>
                <h2 className='title2'> Sign Up</h2>
                <form onSubmit={() => this.handleSubmit(this.props.login)}>
                    <div className='form-group'>
                        <input type="text" placeholder='Username' name='username' className="" id='username' onChange={this.handleChange}/>
                    </div>
                    <div className='form-group'>
                        <input type="text" placeholder='Email' name='email' className="" id='email' onChange={this.handleChange}/>
                    </div>
                    <div className='form-group'>
                        <input type="password" placeholder='Password' name='password' className="" id='password' onChange={this.handleChange}/>
                    </div>
                    <div className='form-group'>
                        <input type="password" placeholder='Re enter password' name='password' className="" id='repassword' onChange={this.handleChange}/>
                    </div>
                    <div className='signupButton'>
                         <button type='submit' className='btn'>Sign Up</button>
                    </div>
                    <h4 className="statement">My Health™ is a web application designed to help its users track and maintain a detailed log of their medical history. As well as keep track of any symptoms or pain they are experiencing day to day.</h4>
                </form>
            </div>
        )
    }
} 