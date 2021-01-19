import React from 'react';
import Doctor_Card from './doctor_card';
import Main_Page_Header from './main_page_header';
import {
    Row,
    Col
  } from 'reactstrap';

export default class Doctors extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            doctors: []
        }
        this.getDoctors = this.getDoctors.bind(this);
    }

    componentDidMount() {
        this.getDoctors();
    }

    getDoctors(){
        const id = Number(this.props.user.user_id)
        if (this.props.user.user_id !== null) {
            fetch(`/api/doctors/${id}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json'}
            })
            .then(response => {
                if (response.status === 400 || response.status === 404 || response.status === 500) {
                    return null
                } else {
                    return response.json();                    
                }
            })
            .then(result => {
                this.setState({
                    doctors: result
                })
            })
        }
    }

    render() {
        const items = (this.state.doctors !== null && this.state.doctors !== undefined) 
        ?  (this.state.doctors.map((dr, index) => {
                return(
                <div className='m-auto' key={index}>
                    <Doctor_Card
                    user={this.props.user}
                    dr={dr}
                    key={dr.doctor_id}
                    setView={this.props.setView}
                    />
                </div>
                );
            })
        )
        : <h2 className="empty mt-5"  style={{margin: 'auto'}}>No Doctor Info available, please add new Doctor to view doctor info</h2>


        return (
            <div>
                <Main_Page_Header setView={this.props.setView}/>
                <h1 className="paintitle" onClick={() => this.props.setView('main',{})}>My Health ♡</h1>
                <div className="backbuttons m-4">
                    <h4 onClick={() => this.props.setView('main',{})}>Go Home</h4>
                    <h4 style={{color: "white"}} >Write in Journal</h4>
                </div>
                <div className='journalButton mb-3'>
                    <button type='submit' className='btn' onClick={() => this.props.setView('doctor', {})}>Add New Doctor</button>
                </div>
                <Row className='row-cols-lg-2'>
                 {items}
                </Row>
            </div>
        )
    }
}