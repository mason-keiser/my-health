import React from 'react';
import Treatment_Card from './treatment_card';

export default class Treatment_History extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tx_history: []
        }
        this.getTreatments = this.getTreatments.bind(this);
    }

    componentDidMount() {
        this.getTreatments();
    }

    getTreatments(){
        const id = Number(this.props.user.user_id)
        if (this.props.user.user_id !== null) {
            fetch(`/api/tx/${id}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json'}
            })
            .then(response => {
                if (response.status === 400 || response.status === 404) {
                    console.log("couldn't fetch notes");
                    return
                } else {
                    return response.json();                    }
            })
            .then(result => {
                this.setState({
                    tx_history: result
                })
            })
        }
    }

    render() {
        const items = (this.state.tx_history !== undefined) 
        ?  (this.state.tx_history.map((note, index) => {
                return(
                    <Treatment_Card
                    tx={note}
                    key={note.tx_id}
                    setView={this.props.setView}/>
                );
            })
        )
        : <h2 className="empty mt-5">No Treatment history available, please add new treatment note to view history</h2>

        return (
            <div>
                <h1 className="paintitle" onClick={() => this.props.setView('main',{})}>My Health ♡</h1>
                <div className="backbuttons m-4">
                    <h4 onClick={() => this.props.setView('main',{})}>Go Home</h4>
                    <h4 style={{color: 'white'}}onClick={() => this.props.setView('pain',{})}>Pain Today</h4>
                </div>
                <div className='journalButton mb-3'>
                    <button type='submit' className='btn' onClick={() => this.props.setView('treatment', {})}>Add to History</button>
                </div>
                <div className='mb-2'>{items}</div>
            </div>    
        )
    }
}