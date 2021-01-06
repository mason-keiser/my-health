import React from 'react';

export default class Login extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit(callback) {
        event.preventDefault();
        const obj = {
          email: this.state.email.toLowerCase(),
          password: this.state.password
        };
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
            null
        )
    }
} 