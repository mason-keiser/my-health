import React from 'react';

function dateBuilder(d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${month} ${date}, ${year}`
}

export default class Journal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date_id: '',
            journal: ''
        }
    }

    render() {
        return (
            <div>
                <h1 className="title" onClick={() => this.props.setView('main',{})}>My Health ♡</h1>
                <div className="backbuttons m-4">
                    <h4 onClick={() => this.props.setView('main',{})}>Home</h4>
                    <h4 onClick={() => this.props.setView('pain_history',{})}>History</h4>
                </div>
                <h2 className="date2 m-4">{dateBuilder(new Date())}</h2>
                <div className='journalNote mt-5'>
                    <h4 className='title5'>Add Journal:</h4>
                    <textarea placeholder='Type Here' id='note'type="text" onChange={this.handleNote}/>
                    <div className='painButton'>
                        <button type='submit' className='btn' onClick={() => this.handleSubmit(this.props.postPain)}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}