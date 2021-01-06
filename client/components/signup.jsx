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
            null
        )
    }
} 