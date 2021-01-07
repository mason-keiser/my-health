import React from 'react';

export default class Pain_Note extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const pain_btn = document.getElementById(this.props.view.params.pain_level)
        console.log(pain_btn)
        return(
            <div>
                <h1 className="paintitle" onClick={() => this.props.setView('main',{})}>My Health ♡</h1>
                <div className="backbuttons m-3">
                    <h4 onClick={() => this.props.setView('main',{})}>Home</h4>
                    <h4 onClick={() => this.props.setView('pain_history',{})}>History</h4>
                </div>
                <h2 className="date2 m-4">{this.props.view.params.date_id}</h2>
                <h2 className='title22 mt-2'>Pain:</h2>
                <div className='painButtons'>
                    <button type='radio' id='1' className='btnNotInUse' onClick={this.handleChange}></button>
                    <button type='radio' id='2' className='btnNotInUse' onClick={this.handleChange}></button>  
                    <button type='radio' id='3' className='btnNotInUse' onClick={this.handleChange}></button>  
                    <button type='radio' id='4' className='btnNotInUse' onClick={this.handleChange}></button>  
                    <button type='radio' id='5' className='btnNotInUse' onClick={this.handleChange}></button>  
                    <button type='radio' id='6' className='btnNotInUse' onClick={this.handleChange}></button>  
                    <button type='radio' id='7' className='btnNotInUse' onClick={this.handleChange}></button>  
                    <button type='radio' id='8' className='btnNotInUse' onClick={this.handleChange}></button>    
                </div>
                <h2 className='title22'>Mood:</h2>
                <div className='painButtons mb-5'>
                    <button type='radio' id='9' className='btnNotInUse' onClick={this.handleChange}></button>
                    <button type='radio' id='10' className='btnNotInUse' onClick={this.handleChange}></button>  
                    <button type='radio' id='11' className='btnNotInUse' onClick={this.handleChange}></button>  
                    <button type='radio' id='12' className='btnNotInUse' onClick={this.handleChange}></button>  
                    <button type='radio' id='13' className='btnNotInUse' onClick={this.handleChange}></button>  
                    <button type='radio' id='14' className='btnNotInUse' onClick={this.handleChange}></button>  
                    <button type='radio' id='15' className='btnNotInUse' onClick={this.handleChange}></button>  
                    <button type='radio' id='16' className='btnNotInUse' onClick={this.handleChange}></button>    
                </div>
                <div className='painNote'>
                    <h4 className='title5'>My Note:</h4>
                    <textarea value= {this.props.view.params.pain_note} readOnly id='note'type="text"/>
                </div>
            </div>
        )
    }
}
