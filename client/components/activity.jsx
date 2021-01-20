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

export default class Activity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: this.props.user.user_id,
            date_id: `${date}`,
            activity_name: '',
            activity_description: ''

        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleActivity = this.handleActivity.bind(this);
    }

    handleSubmit(callback) {
        const obj = {
            user_id: this.state.user_id,
            date_id: this.state.date_id,
            activity_name: this.state.activity_name,
            activity_description: this.state.activity_description
        }
        callback(obj)
    }

    handleActivity(event) {
        if (event.target.id === 'activity_name') {
            this.setState({ activity_name: event.target.value });
        }
        if (event.target.id === 'activity_description') {
            this.setState({ activity_description: event.target.value });
        }
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
                <h2 className="date2 m-4">{this.state.date_id}</h2>
                <div className='journalNote3 mt-5'>
                    <div className='form-group2'>
                        <h5 className='mb-0'>Activity Name: </h5>
                        <input type="text" onChange={this.handleActivity} placeholder="type here" name='meds' id = 'activity_name'/>
                    </div>
                    <h5 className='title5'>Description:</h5>
                    <textarea placeholder='type here' onChange={this.handleActivity} id ='activity_description' type="text"/>
                    <div className='painButton mb-5'>
                        <button type='submit' className='btn' onClick={() => this.handleSubmit(this.props.postActivity)}>Submit</button>

                    </div>

                </div>
                    
                <div className='top' onClick = {() => scroll.scrollToTop()}>▲</div>

            </div>
        )
    }
}