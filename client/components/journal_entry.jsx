import React from 'react';
import Main_Page_Header from './main_page_header'

export default class Journal_Entry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date_id: this.props.view.params.date_id,
            journal: this.props.view.params.journal            
        }
        this.deleteId = this.deleteId.bind(this);
    }

    deleteId(id) {
        fetch('/api/deleteJournal', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({
            journal_id: id
          })
        })
        .then(response => {
          return response.json();
        }).then(result => {
            this.props.setView('journal_history',{})
        })
    }

    render(){
        return (
            <div>
                <Main_Page_Header setView={this.props.setView}/>
                <h1 className="title" onClick={() => this.props.setView('main',{})}>My Health ♡</h1>
                <div className="backbuttons m-4">
                    <h4 onClick={() => this.props.setView('main',{})}>Go Home</h4>
                    <h4 onClick={() => this.props.setView('journal_history',{})}>Journal History</h4>
                </div>
                <h2 className="date2 m-4">{this.state.date_id}</h2>
                <div className='journalNote2 mt-5'>
                    <h4 className='title5'>Add Journal:</h4>
                    <textarea style={{color: '#F36B6B'}} value={this.state.journal} readOnly id='note'type="text"/>
                </div>
                <div className='guest2 mb-5' onClick={() => this.deleteId(this.props.view.params.journal_id)}>Click here to delete journal note</div>
            </div>
        )
    }
}