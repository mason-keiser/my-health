import React from 'react';
import Main_Page_Header from './main_page_header'

export default class Activity_Entry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activity_name: this.props.view.params.activity_name,
            activity_description: this.props.view.params.activity_description

        }
        this.deleteId = this.deleteId.bind(this);
    }

    deleteId(id){
        fetch('/api/deleteAct', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({
            activity_id: id
          })
        })
        .then(response => {
          return response.json();
        }).then(result => {
            this.props.setView('activities',{})
        })
    }

    render(){
        return (
            <div>
                <Main_Page_Header setView={this.props.setView}/>
                <h1 className="title" onClick={() => this.props.setView('main',{})}>My Health ♡</h1>
                <div className="backbuttons m-4">
                    <h4 onClick={() => this.props.setView('main',{})}>Go Home</h4>
                    <h4 onClick={() => this.props.setView('activities',{})}>Activity History</h4>
                </div>
                <h2 className="date2 m-4">{this.props.view.params.date_id}</h2>
                <div className='journalNote3 mt-5'>
                    <div className='form-group2'>
                        <h5 className='mb-0'>Activity Name: </h5>
                        <input type="text" readOnly value={this.props.view.params.activity_name} name='meds' c/>
                    </div>
                    <h5 className='title5'>Description:</h5>
                    <textarea value={this.state.activity_description} readOnly id='actnote'type="text"/>
                </div>
                <div className='guest2 mb-5' onClick={() => this.deleteId(this.props.view.params.activity_id)}>Click here to delete Activity</div>
            </div>
        )
    }
}