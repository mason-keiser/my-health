import React from 'react';
import Main_Page_Header from './main_page_header'
import {
    Link,
    animateScroll as scroll
  } from 'react-scroll';


function dateBuilder(d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${month} ${date}, ${year}`
}

const date = dateBuilder(new Date());

export default class Journal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: this.props.user.user_id,
            date_id: `${date}`,
            journal: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleJournal = this.handleJournal.bind(this);
    }

    handleSubmit(callback) {
        const obj = {
            user_id: this.state.user_id,
            date_id: this.state.date_id,
            journal: this.state.journal
        }
        const req = document.getElementById('required')
        if (obj.journal === '') {
            document.getElementById('note').style.borderColor = 'red'
            req.textContent = '* journal entry must not be empty to be submitted'
            req.style.color = 'red'
        }else {
          callback(obj);
        }
    }

    handleJournal(event) {
        if (event.target.value !== '') {
            this.setState({ journal: event.target.value });
        } 
    }

    render() {
        return (
            <div>
                <Main_Page_Header setView={this.props.setView}/>
                <h1 className="title" onClick={() => this.props.setView('main',{})}>My Health ♡</h1>
                <div className="backbuttons m-4">
                    <h4 onClick={() => this.props.setView('main',{})}>Go Home</h4>
                    <h4 onClick={() => this.props.setView('journal_history',{})}> Journal History</h4>
                </div>
                <h2 className="date2 m-4">{dateBuilder(new Date())}</h2>
                <div className='journalNote mt-5'>
                    <h4 className='title5'>Add Journal:</h4>
                    <textarea placeholder='Type Here' id='note'type="text" onChange={this.handleJournal}/>
                    <div id="required" className="required"></div>
                    <div className='painButton mb-5'>
                        <button type='submit' className='btn' onClick={() => this.handleSubmit(this.props.postJournal)}>Submit</button>
                    </div>
                </div>
                <div className='top' onClick = {() => scroll.scrollToTop()}>▲</div>

            </div>
        )
    }
}