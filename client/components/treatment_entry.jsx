import React from 'react';

export default class Treatment_Entry extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
        <div>
            <h1 className="paintitle" onClick={() => this.props.setView('main',{})}>My Health ♡</h1>
            <div className="backbuttons m-4">
                <h4 onClick={() => this.props.setView('main',{})}>Go Home</h4>
                <h4 onClick={() => this.props.setView('treatment_history',{})}>Tx History</h4>
            </div>
            <h2 className="date2 m-4">{this.props.view.params.date_id}</h2>
            <form>
                <div className='form-group2'>
                    <h5 className='mb-0'>Medication Taken: </h5>
                    <input type="text" readOnly value={this.props.view.params.meds} name='meds' className="" id='meds' onChange={this.handleChange}/>
                </div>
                <div className='form-group2'>
                    <h5 className='mb-0'>Mind-Body Therapy: </h5>
                    <input type="text" readOnly value={this.props.view.params.mb_therapy}  name='mb_therapy' className="" id='mb_therapy' onChange={this.handleChange}/>
                </div>
                <div className='form-group2'>
                    <h5 className='mb-0'>Exercise/Physical Therapy: </h5>
                    <input type="text" readOnly value={this.props.view.params.p_therapy}  name='p_therapy' className="" id='p_therapy' onChange={this.handleChange}/>
                </div>
                <div className='form-group2'>
                    <h5 className='mb-0'>Cold/Heat Therapy: </h5>
                    <input type="text" readOnly value={this.props.view.params.ch_therapy} name='ch_therapy' className="" id='ch_therapy' onChange={this.handleChange}/>
                </div>
            </form>
        </div>
        )
    }
 }