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

const date = dateBuilder(new Date())

export default class Pain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userid: this.props.user.user_id,
            date: `${date}`,
            painLevel: null,
            moodLevel: null,
            painNote: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleNote = this.handleNote.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeBorder = this.removeBorder.bind(this);
    }

    componentDidUpdate() {
        this.removeBorder()
    } 

    handleSubmit(callback) {
        const obj = {
            user_id: this.state.userid,
            date_id: this.state.date,
            pain_level: this.state.painLevel,
            mood_level: this.state.moodLevel,
            pain_note: this.state.painNote
        }
        callback(obj)
    }

    handleChange(event) {
        const id = Number(event.target.id);
        let ob = document.getElementById(id);
            ob.style.border = '3px solid black';
        if (id >= 9) {
            this.setState({
                moodLevel: event.target.id
            })
        } else {
            this.setState({
                painLevel: event.target.id
            })
        }
    }

    handleNote(event) {
        if (event.target.value !== '') {
            this.setState({ painNote: event.target.value });
        } 
    }

    removeBorder(){
        const moodLvl = this.state.moodLevel;
        const painLvl = this.state.painLevel;
        const painBtns = document.getElementById('painButtons').getElementsByTagName('button');
        const moodBtns = document.getElementById('painButtons2').getElementsByTagName('button');
        for (let i = 0; i < painBtns.length; i++) {
            let painId = painBtns[i].id
            if (painId !== painLvl) {
                painBtns[i].style.border = 'none'
            }
        }
        for (let i = 0; i < moodBtns.length; i++) {
            let moodId = moodBtns[i].id
            if (moodId !== moodLvl) {
                moodBtns[i].style.border = 'none'
            }
        }
    }

    render() {
        return (
            <div>
                 <Main_Page_Header setView={this.props.setView}/>
                <h1 className="paintitle" onClick={() => this.props.setView('main',{})}>My Health ♡</h1>
                <div className="backbuttons m-3">
                    <h4 onClick={() => this.props.setView('main',{})}>Go Home</h4>
                    <h4 onClick={() => this.props.setView('pain_history',{})}>Pain History</h4>
                </div>
                <h2 className="date2 m-4">{dateBuilder(new Date())}</h2>
                <h2 className='title22 mt-2'>Pain Today:</h2>
                <div className='painButtons' id="painButtons">
                    <button type='radio' id='1' className='btn1' onClick={this.handleChange}>1</button>
                    <button type='radio' id='2' className='btn2' onClick={this.handleChange}>2</button>  
                    <button type='radio' id='3' className='btn3' onClick={this.handleChange}>3</button>  
                    <button type='radio' id='4' className='btn4' onClick={this.handleChange}>4</button>  
                    <button type='radio' id='5' className='btn5' onClick={this.handleChange}>5</button>  
                    <button type='radio' id='6' className='btn6' onClick={this.handleChange}>6</button>  
                    <button type='radio' id='7' className='btn7' onClick={this.handleChange}>7</button>  
                    <button type='radio' id='8' className='btn8' onClick={this.handleChange}>8</button>    
                </div>
                <h2 className='title22'>Mood Today:</h2>
                <div className='painButtons mb-5' id='painButtons2'>
                    <button type='radio' id='9' className='btn9' onClick={this.handleChange}>1</button>
                    <button type='radio' id='10' className='btn10' onClick={this.handleChange}>2</button>  
                    <button type='radio' id='11' className='btn11' onClick={this.handleChange}>3</button>  
                    <button type='radio' id='12' className='btn12' onClick={this.handleChange}>4</button>  
                    <button type='radio' id='13' className='btn13' onClick={this.handleChange}>5</button>  
                    <button type='radio' id='14' className='btn14' onClick={this.handleChange}>6</button>  
                    <button type='radio' id='15' className='btn15' onClick={this.handleChange}>7</button>  
                    <button type='radio' id='16' className='btn16' onClick={this.handleChange}>8</button>    
                </div>
                <div className='painNote'>
                    <h4 className='title5'>Add Note:</h4>
                    <textarea placeholder='Type Here' id='note'type="text" onChange={this.handleNote}/>
                    <div className='painButton mb-5'>
                        <button type='submit' className='btn' onClick={() => this.handleSubmit(this.props.postPain)}>Submit</button>
                    </div>
                </div>
                <div className='top' onClick = {() => scroll.scrollToTop()}>▲</div>
            </div>
        )
    }
}