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
            date: `${date}`,
            painLevel: null,
            painNote: ''
        }
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
                    <button type='radio' id='healthy' className='btn'></button>
                    <button type='radio' id='' className='btn'></button>  
                    <button type='radio' id='' className='btn'></button>  
                    <button type='radio' id='' className='btn'></button>  
                    <button type='radio' id='' className='btn'></button>  
                    <button type='radio' id='' className='btn'></button>  
                    <button type='radio' id='' className='btn'></button>  
                    <button type='radio' id='severe' className='btn'></button>    
                </div>
            </div>
        )
    }
}