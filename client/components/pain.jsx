import React from 'react';

function dateBuilder(d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[d.getDay()];
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
            userid: this.props.user.userId,
            date: `${date}`,
            painLevel: null,
            moodLevel: null,
            painNote: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const id = Number(event.target.id)
        if (id >= 9) {
            this.setState({
                moodLevel: event.target.id
            })
        } else {
            this.setState({
                painLevel: event.target.id
            })
        }
       
        console.log(id)
    }

    render() {
        return (
            <div>
                <h1 className="paintitle" onClick={() => this.props.setView('main',{})}>My Health ♡</h1>
                <div className="backbuttons">
                    <h4 onClick={() => this.props.setView('main',{})}>Home</h4>
                    <h4>History</h4>
                </div>
                <h2 className="date2">{dateBuilder(new Date())}</h2>
                <h2 className='title22'>Pain Today</h2>
                <div className='painButtons'>
                    <button type='radio' id='1' className='btn1' onClick={this.handleChange}></button>
                    <button type='radio' id='2' className='btn2' onClick={this.handleChange}></button>  
                    <button type='radio' id='3' className='btn3' onClick={this.handleChange}></button>  
                    <button type='radio' id='4' className='btn4' onClick={this.handleChange}></button>  
                    <button type='radio' id='5' className='btn5' onClick={this.handleChange}></button>  
                    <button type='radio' id='6' className='btn6' onClick={this.handleChange}></button>  
                    <button type='radio' id='7' className='btn7' onClick={this.handleChange}></button>  
                    <button type='radio' id='8' className='btn8' onClick={this.handleChange}></button>    
                </div>
                <h2 className='title22'>Mood Today</h2>
                <div className='painButtons'>
                    <button type='radio' id='9' className='btn' onClick={this.handleChange}></button>
                    <button type='radio' id='10' className='btn' onClick={this.handleChange}></button>  
                    <button type='radio' id='11' className='btn' onClick={this.handleChange}></button>  
                    <button type='radio' id='12' className='btn' onClick={this.handleChange}></button>  
                    <button type='radio' id='13' className='btn' onClick={this.handleChange}></button>  
                    <button type='radio' id='14' className='btn' onClick={this.handleChange}></button>  
                    <button type='radio' id='15' className='btn' onClick={this.handleChange}></button>  
                    <button type='radio' id='16' className='btn' onClick={this.handleChange}></button>    
                </div>
                <div className='painNote'>
                    <h4 className='title4'>Add Note:</h4>
                    <textarea placeholder='Type Here' type="text"/>
                    <div className='painButton'>
                        <button type='submit' className='btn'>Start</button>
                    </div>
                </div>
            </div>
        )
    }
}