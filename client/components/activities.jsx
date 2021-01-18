import React from 'react';
import Main_Page_Header from './main_page_header';
import Activity_Card from './activity_card'

export default class Activities extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            activities: []
        }
        this.getActivities = this.getActivities.bind(this);
    }

    componentDidMount() {
        this.getActivities();
    }

    getActivities(){
        const id = Number(this.props.user.user_id)
        if (this.props.user.user_id !== null) {
            fetch(`/api/activities/${id}`, {
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
                    activities: result
                })
            })
        }
    }

    render() {
        const items = (this.state.activities !== null && this.state.activities !== undefined) 
        ?  (this.state.activities.map((act, index) => {
                return(
                    <Activity_Card
                    activity={act}
                    key={act.activity_id}
                    setView={this.props.setView}/>
                );
            })
        )
        : <h2 className="empty mt-5">No Activity History available, please add new activity to view history</h2>


        return (
            <div>
                <Main_Page_Header setView={this.props.setView}/>
                <h1 className="paintitle" onClick={() => this.props.setView('main',{})}>My Health ♡</h1>
                <div className="backbuttons m-4">
                    <h4 onClick={() => this.props.setView('main',{})}>Go Home</h4>
                    <h4 style={{color: "white"}} >Write in Journal</h4>
                </div>
                <div className='journalButton mb-3'>
                    <button type='submit' className='btn' onClick={() => this.props.setView('activity', {})}>Add to Activities</button>
                </div>
                <div className='mb-2'>
                   {items}
                </div>
            </div>
        )
    }
}