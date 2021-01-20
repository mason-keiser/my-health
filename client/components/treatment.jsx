import React from 'react'
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
const date = dateBuilder(new Date());
export default class Treatment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date_id: `${date}`,
            user_id: this.props.user.user_id,
            meds: '',
            mb_therapy: '',
            p_therapy: '',
            ch_therapy: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(callback) {
        event.preventDefault();
        const obj = {
            date_id: this.state.date_id,
            user_id: this.state.user_id,
            meds: this.state.meds,
            mb_therapy: this.state.mb_therapy,
            p_therapy: this.state.p_therapy,
            ch_therapy: this.state.ch_therapy
        };
        const req = document.getElementById('required')
        if (obj.meds === '') {
            document.getElementById('meds').style.borderColor = 'red'
            req.textContent = '* red fields are required for submission'
            req.style.color = 'red'
        } if (obj.mb_therapy === '') {
            document.getElementById('mb_therapy').style.borderColor = 'red'
            req.textContent = '* red fields are required for submission'
            req.style.color = 'red'
        } if (obj.p_therapy === '') {
            document.getElementById('p_therapy').style.borderColor = 'red'
            req.textContent = '* red fields are required for submission'
            req.style.color = 'red'
        } if (obj.ch_therapy === '') {
            document.getElementById('ch_therapy').style.borderColor = 'red'
            req.textContent = '* red fields are required for submission'
            req.style.color = 'red'
        }else {
          callback(obj);
        }
    }
    
    handleChange(event) {
        if (event.target.id === 'meds') {
          this.setState({ meds: event.target.value });
        }
        if (event.target.id === 'mb_therapy') {
          this.setState({ mb_therapy: event.target.value });
        }
        if (event.target.id === 'p_therapy') {
            this.setState({ p_therapy: event.target.value });
        }
        if (event.target.id === 'ch_therapy') {
            this.setState({ ch_therapy: event.target.value });
        }
    }

    render(){
        return(
            <div>
                <Main_Page_Header setView={this.props.setView}/>
                <h1 className="paintitle" onClick={() => this.props.setView('main',{})}>My Health ♡</h1>
                <div className="backbuttons m-4">
                    <h4 onClick={() => this.props.setView('main',{})}>Go Home</h4>
                    <h4 onClick={() => this.props.setView('treatment_history',{})}>Tx History</h4>
                </div>
                <h2 className="date2 m-4">{dateBuilder(new Date())}</h2>
                <form onSubmit={() => this.handleSubmit(this.props.postTx)}>
                    <div className='form-group2'>
                        <h5 className='mb-0'>Medication Taken: </h5>
                        <input type="text" placeholder='Type Here' name='meds' className="" id='meds' onChange={this.handleChange}/>
                    </div>
                    <div className='form-group2'>
                        <h5 className='mb-0'>Mind-Body Therapy: </h5>
                        <input type="text" placeholder='Type Here' name='mb_therapy' className="" id='mb_therapy' onChange={this.handleChange}/>
                    </div>
                    <div className='form-group2'>
                        <h5 className='mb-0'>Exercise/Physical Therapy: </h5>
                        <input type="text" placeholder='Type Here' name='p_therapy' className="" id='p_therapy' onChange={this.handleChange}/>
                    </div>
                    <div className='form-group2'>
                        <h5 className='mb-0'>Cold/Heat Therapy: </h5>
                        <input type="text" placeholder='Type Here' name='ch_therapy' className="" id='ch_therapy' onChange={this.handleChange}/>
                    </div>
                    <div id="required" className="required"></div>
                    <div className='signupButton mb-5'>
                         <button type='submit' className='btn mt-5'>Submit</button>
                    </div>
                </form>
                <div className='top' onClick = {() => scroll.scrollToTop()}>▲</div>
            </div>
        )
    }
}