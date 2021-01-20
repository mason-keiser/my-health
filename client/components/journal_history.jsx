import React from 'react';
import Journal_Card from './journal_card';
import Main_Page_Header from './main_page_header'
import {
    Link,
    animateScroll as scroll
  } from 'react-scroll';


export default class Journal_History extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            journal_entries: []
        }
        this.getJournalEntries = this.getJournalEntries.bind(this);
    }

    componentDidMount() {
        this.getJournalEntries();
    }

    getJournalEntries(){
        const id = Number(this.props.user.user_id)
        if (this.props.user.user_id !== null) {
            fetch(`/api/journal/${id}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json'}
            })
            .then(response => {
                if (response.status === 400 || response.status === 404 || response.status === 500) {
                    return null
                } else {
                    return response.json();                    }
            })
            .then(result => {
                this.setState({
                    journal_entries: result
                })
            })
        }
    }

    render() {
        const list = (this.state.journal_entries !== undefined && this.state.journal_entries !== null) 
        ?  (this.state.journal_entries.map((journal, index) => {
                return(
                <Journal_Card
                journal ={journal}
                key={journal.journal_id}
                setView={this.props.setView}/>
                );
            })
        )
        : <h2 className="empty mt-5 m-auto">No Journal Entries available, please add new journal entry to view history</h2>

        return (
            <div>
                <Main_Page_Header setView={this.props.setView}/>
                <h1 className="paintitle" onClick={() => this.props.setView('main',{})}>My Health ♡</h1>
                <div className="backbuttons m-4">
                    <h4 onClick={() => this.props.setView('main',{})}>Go Home</h4>
                    <h4 style={{color: "white"}} onClick={() => this.props.setView('journal',{})}>Write in Journal</h4>
                </div>
                <div className='journalButton mb-3'>
                    <button type='submit' className='btn' onClick={() => this.props.setView('journal', {})}>Add to Journal</button>
                </div>
                <div className='mb-2'>
                    {list}
                </div>
                <div className='top' onClick = {() => scroll.scrollToTop()}>▲</div>

            </div>
            )
    }
}