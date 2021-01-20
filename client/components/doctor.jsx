import React from 'react'
import Main_Page_Header from './main_page_header'
import {
    Link,
    animateScroll as scroll
  } from 'react-scroll';


export default class Doctor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: this.props.user.user_id,
            doctor_name: '',
            street_address: '',
            state: '',
            city: '',
            zip_code: '',
            phone_number: '',
            note: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleState = this.handleState.bind(this);
    }

    handleSubmit(callback) {
        event.preventDefault();
        const obj = {
            user_id: this.state.user_id,
            doctor_name: this.state.doctor_name,
            street_address: this.state.street_address,
            state: this.state.state,
            city: this.state.city,
            zip_code: this.state.zip_code,
            phone_number: this.state.phone_number,
            note: this.state.note
        };
        callback(obj);
        
    }
    
    handleChange(event) {
        if (event.target.id === 'doctor_name') {
            this.setState({ doctor_name: 'Dr. ' + event.target.value });
        } else {
            this.setState({
                [event.target.id]: event.target.value
            })
        }
    }

    handleState(event) {
        this.setState({
            state: event.target.value
        })
    }

    render(){
        return(
            <div>
                <Main_Page_Header setView={this.props.setView}/>
                <h1 className="paintitle" onClick={() => this.props.setView('main',{})}>My Health ♡</h1>
                <div className="backbuttons m-4">
                    <h4 onClick={() => this.props.setView('main',{})}>Go Home</h4>
                    <h4 onClick={() => this.props.setView('doctors',{})}>Saved Doctors</h4>
                </div>

                <form onSubmit={() => this.handleSubmit(this.props.postDoctor)}>
                    <div className='form-group2'>
                        <h5 className='mb-0'>Doctor Name: </h5>
                        <input type="text" placeholder='Type Here' name='doctor_name' className="" id='doctor_name' onChange={this.handleChange}/>
                    </div>
                    <div className='form-group2'>
                        <h5 className='mb-0'>Street Address: </h5>
                        <input type="text" placeholder='Type Here' name='street_address' className="" id='street_address' onChange={this.handleChange}/>
                    </div>
                    <div className='form-group3'>
                        <h5 className=''>State: </h5>
                        <select id='state' onChange={this.handleState}>
	                        <option value="AL">Alabama</option>
	                        <option value="AK">Alaska</option>
	                        <option value="AZ">Arizona</option>
	                        <option value="AR">Arkansas</option>
	                        <option value="CA">California</option>
	                        <option value="CO">Colorado</option>
	                        <option value="CT">Connecticut</option>
	                        <option value="DE">Delaware</option>
	                        <option value="DC">District Of Columbia</option>
	                        <option value="FL">Florida</option>
	                        <option value="GA">Georgia</option>
	                        <option value="HI">Hawaii</option>
	                        <option value="ID">Idaho</option>
	                        <option value="IL">Illinois</option>
	                        <option value="IN">Indiana</option>
	                        <option value="IA">Iowa</option>
	                        <option value="KS">Kansas</option>
	                        <option value="KY">Kentucky</option>
	                        <option value="LA">Louisiana</option>
	                        <option value="ME">Maine</option>
	                        <option value="MD">Maryland</option>
	                        <option value="MA">Massachusetts</option>
	                        <option value="MI">Michigan</option>
	                        <option value="MN">Minnesota</option>
	                        <option value="MS">Mississippi</option>
	                        <option value="MO">Missouri</option>
	                        <option value="MT">Montana</option>
	                        <option value="NE">Nebraska</option>
	                        <option value="NV">Nevada</option>
	                        <option value="NH">New Hampshire</option>
	                        <option value="NJ">New Jersey</option>
	                        <option value="NM">New Mexico</option>
	                        <option value="NY">New York</option>
	                        <option value="NC">North Carolina</option>
	                        <option value="ND">North Dakota</option>
	                        <option value="OH">Ohio</option>
	                        <option value="OK">Oklahoma</option>
	                        <option value="OR">Oregon</option>
	                        <option value="PA">Pennsylvania</option>
	                        <option value="RI">Rhode Island</option>
	                        <option value="SC">South Carolina</option>
	                        <option value="SD">South Dakota</option>
	                        <option value="TN">Tennessee</option>
	                        <option value="TX">Texas</option>
	                        <option value="UT">Utah</option>
	                        <option value="VT">Vermont</option>
	                        <option value="VA">Virginia</option>
	                        <option value="WA">Washington</option>
	                        <option value="WV">West Virginia</option>
	                        <option value="WI">Wisconsin</option>
	                        <option value="WY">Wyoming</option>
                        </select>	
                        <h5 className='cit'>City: </h5>
                        <input type="text" placeholder='Type Here' name='ch_therapy' className="" id='city' onChange={this.handleChange}/>
                    </div>
                    
                    <div className='form-group2'>
                        <h5 className='mb-0'>Zip Code: </h5>
                        <input type="text" placeholder='Type Here' name='zip_code' className="" id='zip_code' onChange={this.handleChange}/>
                    </div>
                    <div className='form-group2'>
                        <h5 className='mb-0'>Phone Number: </h5>
                        <input type="text" placeholder='(###)-###-####' name='phone_number' className="" id='phone_number' onChange={this.handleChange}/>
                    </div>
                    <div className='form-group2 journalNote3'>
                        <h5 className='mb-0'>Note: </h5>
                        <textarea placeholder='type here' onChange={this.handleChange} id ='note' type="text"/>
                    </div>
                    <div className='signupButton mb-5'>
                         <button type='submit' className='btn mt-5'>Submit</button>
                    </div>
                </form>
                <div className='top' onClick = {() => scroll.scrollToTop()}>▲</div>

            </div>
        )
    }
}