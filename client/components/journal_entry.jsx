import React from 'react';

export default class Journal_Entry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date_id: this.props.view.params.date_id,
            journal: this.props.view.params.journal            
        }
    }

    render(){
        return (
            <div>
                <h1 className="title" onClick={() => this.props.setView('main',{})}>My Health ♡</h1>
                <div className="backbuttons m-4">
                    <h4 onClick={() => this.props.setView('main',{})}>Go Home</h4>
                    <h4 onClick={() => this.props.setView('journal_history',{})}>History</h4>
                </div>
                <h2 className="date2 m-4">{this.state.date_id}</h2>
                <div className='journalNote2 mt-5'>
                    <h4 className='title5'>Add Journal:</h4>
                    <textarea value={this.state.journal} readOnly id='note'type="text"/>
                </div>
            </div>
        )
    }
}