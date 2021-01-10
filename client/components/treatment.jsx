import React from 'react'


function dateBuilder(d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${month} ${date}, ${year}`
}

export default class Treatment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            meds: '',
            mb_therapy: '',
            p_therapy: '',
            ch_therapy: ''
        }
    }

    render(){
        return(
            <div>
                <h1 className="paintitle" onClick={() => this.props.setView('main',{})}>My Health ♡</h1>
                <div className="backbuttons m-4">
                    <h4 onClick={() => this.props.setView('main',{})}>Go Home</h4>
                    <h4 style={{color: 'white'}}onClick={() => this.props.setView('pain',{})}>Pain Today</h4>
                </div>
                <h2 className="date2 m-4">{dateBuilder(new Date())}</h2>
                <form>
                    <div className='form-group2'>
                        <h5 className='mb-0'>Medication Taken: </h5>
                        <input type="text" placeholder='Type Here' name='meds' className="" id='meds' onChange={this.handleChange}/>
                    </div>
                    <div className='form-group2'>
                        <h5>Mind-Body Therapy: </h5>
                        <input type="text" placeholder='Type Here' name='mb_therapy' className="" id='mb_therapy' onChange={this.handleChange}/>
                    </div>
                    <div className='form-group2'>
                        <h5>Exercise/Physical Therapy: </h5>
                        <input type="text" placeholder='Type Here' name='p_therapy' className="" id='p_therapy' onChange={this.handleChange}/>
                    </div>
                    <div className='form-group2'>
                        <h5>Cold/Heat Therapy: </h5>
                        <input type="text" placeholder='Type Here' name='ch_therapy' className="" id='ch_therapy' onChange={this.handleChange}/>
                    </div>
                    <div className='signupButton'>
                         <button type='submit' className='btn mt-3'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}