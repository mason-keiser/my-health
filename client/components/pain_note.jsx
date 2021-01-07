import React from 'react';

const colorObj = {
    1: '#08DB37', 2: '#98F877', 3: '#DBFF00', 4: '#F8FD00',
    5: '#FFAD0F', 6: '#EE731A', 7: '#EC3E07', 8: '#FF0000',
    9: '#08DB37', 10: '#98F877', 11: '#DBFF00', 12: '#F8FD00',
    13: '#FFAD0F', 14: '#EE731A', 15: '#EC3E07', 16: '#FF0000'
}

export default class Pain_Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pain_level: this.props.view.params.pain_level,
            mood_level: this.props.view.params.mood_level
        }

    }

    componentDidMount() {
        if (this.state.pain_level !== null) {
            let pai = this.state.pain_level + 'cat';
            let moo = this.state.mood_level + 'cat';
            let pain_btn = document.getElementById(pai)
            let mood_btn = document.getElementById(moo)
                pain_btn.style.backgroundColor = colorObj[this.state.pain_level]
                mood_btn.style.backgroundColor = colorObj[this.state.mood_level]
        }
    }

    render() {
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
                    <button type='radio' id='1cat' className='btnNotInUse' onClick={this.handleChange}></button>
                    <button type='radio' id='2cat' className='btnNotInUse' onClick={this.handleChange}></button>  
                    <button type='radio' id='3cat' className='btnNotInUse' onClick={this.handleChange}></button>  
                    <button type='radio' id='4cat' className='btnNotInUse' onClick={this.handleChange}></button>  
                    <button type='radio' id='5cat' className='btnNotInUse' onClick={this.handleChange}></button>  
                    <button type='radio' id='6cat' className='btnNotInUse' onClick={this.handleChange}></button>  
                    <button type='radio' id='7cat' className='btnNotInUse' onClick={this.handleChange}></button>  
                    <button type='radio' id='8cat' className='btnNotInUse' onClick={this.handleChange}></button>    
                </div>
                <h2 className='title22'>Mood:</h2>
                <div className='painButtons mb-5'>
                    <button type='radio' id='9cat' className='btnNotInUse' onClick={this.handleChange}></button>
                    <button type='radio' id='10cat' className='btnNotInUse' onClick={this.handleChange}></button>  
                    <button type='radio' id='11cat' className='btnNotInUse' onClick={this.handleChange}></button>  
                    <button type='radio' id='12cat' className='btnNotInUse' onClick={this.handleChange}></button>  
                    <button type='radio' id='13cat' className='btnNotInUse' onClick={this.handleChange}></button>  
                    <button type='radio' id='14cat' className='btnNotInUse' onClick={this.handleChange}></button>  
                    <button type='radio' id='15cat' className='btnNotInUse' onClick={this.handleChange}></button>  
                    <button type='radio' id='16cat' className='btnNotInUse' onClick={this.handleChange}></button>    
                </div>
                <div className='painNote'>
                    <h4 className='title5'>My Note:</h4>
                    <textarea value= {this.props.view.params.pain_note} readOnly id='note'type="text"/>
                </div>
            </div>
        )
    }
}
