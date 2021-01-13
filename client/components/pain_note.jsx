import React from 'react';
import Main_Page_Header from './main_page_header'

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
        this.deleteId = this.deleteId.bind(this);
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

    deleteId(id) {
        fetch('/api/deletePainNote', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({
            note_id: id
          })
        })
        .then(response => {
          return response.json();
        }).then(result => {
            this.props.setView('pain_history',{})
        })
      }

    render() {
        return(
            <div>
                <Main_Page_Header setView={this.props.setView}/>
                <h1 className="paintitle" onClick={() => this.props.setView('main',{})}>My Health ♡</h1>
                <div className="backbuttons m-3">
                    <h4 onClick={() => this.props.setView('main',{})}>Go Home</h4>
                    <h4 onClick={() => this.props.setView('pain_history',{})}>Pain History</h4>
                </div>
                <h2 className="date2 m-4">{this.props.view.params.date_id}</h2> 
                <h2 className='title22 mt-2'>Pain:</h2>
                <div className='painButtons'>
                    <button type='radio' id='1cat' className='btnNotInUse' onClick={this.handleChange}>1</button>
                    <button type='radio' id='2cat' className='btnNotInUse' onClick={this.handleChange}>2</button>  
                    <button type='radio' id='3cat' className='btnNotInUse' onClick={this.handleChange}>3</button>  
                    <button type='radio' id='4cat' className='btnNotInUse' onClick={this.handleChange}>4</button>  
                    <button type='radio' id='5cat' className='btnNotInUse' onClick={this.handleChange}>5</button>  
                    <button type='radio' id='6cat' className='btnNotInUse' onClick={this.handleChange}>6</button>  
                    <button type='radio' id='7cat' className='btnNotInUse' onClick={this.handleChange}>7</button>  
                    <button type='radio' id='8cat' className='btnNotInUse' onClick={this.handleChange}>8</button>    
                </div>
                <h2 className='title22'>Mood:</h2>
                <div className='painButtons mb-5'>
                    <button type='radio' id='9cat' className='btnNotInUse' onClick={this.handleChange}>1</button>
                    <button type='radio' id='10cat' className='btnNotInUse' onClick={this.handleChange}>2</button>  
                    <button type='radio' id='11cat' className='btnNotInUse' onClick={this.handleChange}>3</button>  
                    <button type='radio' id='12cat' className='btnNotInUse' onClick={this.handleChange}>4</button>  
                    <button type='radio' id='13cat' className='btnNotInUse' onClick={this.handleChange}>5</button>  
                    <button type='radio' id='14cat' className='btnNotInUse' onClick={this.handleChange}>6</button>  
                    <button type='radio' id='15cat' className='btnNotInUse' onClick={this.handleChange}>7</button>  
                    <button type='radio' id='16cat' className='btnNotInUse' onClick={this.handleChange}>8</button>    
                </div>
                <div className='painNote'>
                    <h4 className='title5'>My Note:</h4>
                    <textarea value= {this.props.view.params.pain_note} readOnly id='note'type="text"/>
                </div>
                <div className='guest2' onClick={() => this.deleteId(this.props.view.params.note_id)}>Click here to delete pain note</div>
            </div>
        )
    }
}
