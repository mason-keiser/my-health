import React from 'react';

export default class Signup extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            password2: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    
handleSubmit(callback) {
    event.preventDefault();
    const obj = {
      username: this.state.username,
      email: this.state.email.toLowerCase(),
      password: this.state.password,
    };
    const req = document.getElementById('required')
    if (obj.username === '') {
        document.getElementById('username').style.borderColor = 'red'
        req.textContent = '* red fields are required for checkout'
        req.style.color = 'red'
    } if (obj.email === '') {
        document.getElementById('email').style.borderColor = 'red'
        req.textContent = '* red fields are required for checkout'
        req.style.color = 'red'
    } if (obj.password === '') {
        document.getElementById('password').style.borderColor = 'red'
        req.textContent = '* red fields are required for checkout'
        req.style.color = 'red'
    } if (obj.password === '') {
        document.getElementById('password2').style.borderColor = 'red'
        req.textContent = '* red fields are required for checkout'
        req.style.color = 'red'
    } if (obj.password !== this.state.password2) {
        document.getElementById('password').style.borderColor = 'red'
        document.getElementById('password2').style.borderColor = 'red'
        req.textContent = '* passwords entered do not match, please make sure they match to continue'
        req.style.color = 'red'
    }else {
      callback(obj);
    }
}

handleChange(event) {
    if (event.target.id === 'username') {
      this.setState({ username: event.target.value });
    }
    if (event.target.id === 'email') {
      this.setState({ email: event.target.value})
    }
    if (event.target.id === 'password') {
      this.setState({ password: event.target.value });
    }
    if (event.target.id === 'password2') {
      this.setState({ password2: event.target.value });
    }
}

    render() {
        return(
            <div>
                <h1 className="title" onClick={() => this.props.setView('init',{})}>My Health ♡</h1>
                <h2 className='title22'> Sign Up</h2>
                <form onSubmit={() => this.handleSubmit(this.props.signUp)}>
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
                        <input type="password" placeholder='Re enter password' name='password' className="" id='password2' onChange={this.handleChange}/>
                    </div>
                    <div id="required" className="required"></div>
                    <div className='signupButton'>
                         <button type='submit' className='btn'>Sign Up</button>
                    </div>
                    <h4 className="statement">My Health™ is a web application designed to help its users track and maintain a detailed log of their medical history. As well as keep track of any symptoms or pain they are experiencing day to day.</h4>
                </form>
                <div className='top' onClick = {() => scroll.scrollToTop()}>▲</div>
            </div>
        )
    }
} 