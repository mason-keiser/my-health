import React from 'react';

function dateBuilder(d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${month} ${date}, ${year}`
}

export default class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1 className="title" onClick={() => this.props.setView('main',{})}>My Health ♡</h1>
                <h2 className="date m-5">{dateBuilder(new Date())}</h2>
                <h2 className="welcomb">Welcome back, {this.props.user.firstname}</h2>
                <div className="mainB">
                    <button onClick={() => this.props.setView('pain',{})} type='submit' className='btn'>Pain Level</button>
                    <button type='submit' className='btn'>Journal</button>  
                </div>  
            </div>
        )
    }
}