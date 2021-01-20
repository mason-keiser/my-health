import React from 'react';
import Main_Page_Header from './main_page_header';
import Medication_Card from './medication_card'
import {
    Row,
    Col
  } from 'reactstrap';


export default class Medications extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            meds: []
        }
        this.getMedications = this.getMedications.bind(this);
    }

    componentDidMount() {
        this.getMedications();
    }

    getMedications(){
        const id = Number(this.props.user.user_id)
        if (this.props.user.user_id !== null) {
            fetch(`/api/meds/${id}`, {
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
                    meds: result
                })
            })
        }
    }

    render() {
        const items = (this.state.meds !== null && this.state.meds !== undefined) 
        ?  (this.state.meds.map((med, index) => {
                return(
                    <div className='m-auto' key={index}>
                        <Medication_Card
                        med={med}
                        key={med.med_id}
                        setView={this.props.setView}/>
                    </div>
                );
            })
        )
        : <h2 className="empty mt-5 m-auto">No Medications available, please add new medication to view list</h2>


        return (
            <div>
                <Main_Page_Header setView={this.props.setView}/>
                <h1 className="paintitle" onClick={() => this.props.setView('main',{})}>My Health ♡</h1>
                <div className="backbuttons m-4">
                    <h4 onClick={() => this.props.setView('main',{})}>Go Home</h4>
                    <h4 style={{color: "white"}} >Write in Journal</h4>
                </div>
                <div className='journalButton mb-3'>
                    <button type='submit' className='btn' onClick={() => this.props.setView('medication', {})}>Add to Medications</button>
                </div>
                <Row className='row-cols-lg-2'>
                   {items}
                </Row>
            </div>
        )
    }
}