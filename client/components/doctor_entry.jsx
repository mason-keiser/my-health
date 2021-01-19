import React from 'react'
import Main_Page_Header from './main_page_header'

const obj = {
    'AL': 'Alabama', 'AK': 'Alaska', 'AZ': 'Arizona', "AR": 'Arkansas', 'CA': 'California',
    'CO': 'Colorado', 'CT': 'Conneticut', 'DE': 'Delaware', "DC": 'District of Columbia',
    'FL': 'Florida', 'GA': 'Georgia', 'HI': 'Hawaii', 'ID': 'Idaho', 'IL': 'Illinios',
    'IN': 'Indiana', 'IA': 'Iowa', 'KS': 'Kansas', 'KY': 'Kentucky', 'LA': 'Louisiana',
    'ME': 'Maine', 'MD': 'Maryland', 'MA': 'Massachussets','MI': 'Michigan', 'MN': 'Minnesota',
    'MS': 'Mississippi', 'MO': 'Missouri', 'MT': 'Montana', 'NE': 'Nebraska', 'NV': 'Nevada',
    'NH': 'New Hampshire','NJ': 'New Jersey', 'NM': 'New Mexico', 'NY': 'New York',
    'NC': 'North Carolina', 'ND': 'North Dakota', 'OH': 'Ohio', 'OK': 'Oklahoma', 'OR': 'Oregon',
    'PA': 'Pennsylvania', 'RI': 'Rhode Island', 'SC': 'South Carolina', 'SD': 'South Dakota',
    'TN': 'Tennessee', 'TX': 'Texas', 'UT': 'Utah', 'VT': 'Vermont', 'VA': 'Virginia',
    'WA': 'Washington', 'WV': 'West Virginia', 'WI': 'Wisconsin', 'WY': 'Wyoming'
}

export default class Doctor_Entry extends React.Component {
    constructor(props) {
        super(props);
        this.deleteId = this.deleteId.bind(this);
    }

    
    deleteId(id){
        fetch('/api/deleteDoctor', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({
            doctor_id: id
          })
        })
        .then(response => {
          return response.json();
        }).then(result => {
            this.props.setView('doctors',{})
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
                <form >
                    <div className='form-group2'>
                        <h5 className='mb-0'>Doctor Name: </h5>
                        <input style={{color: '#F36B6B'}}type="text" readOnly value={this.props.view.params.doctor_name} name='doctor_name' className="" id='doctor_name' onChange={this.handleChange}/>
                    </div>
                    <div className='form-group2'>
                        <h5 className='mb-0'>Street Address: </h5>
                        <input style={{color: '#F36B6B'}} type="text" readOnly value={this.props.view.params.street_address} name='street_address' className="" id='street_address' onChange={this.handleChange}/>
                    </div>
                    <div className='form-group3'>
                        <h5 className=''>State: </h5>
                        <select style={{color: '#F36B6B'}} id='state'>
                            <option style={{color: '#F36B6B'}} readOnly value={this.props.view.params.state}>{obj[this.props.view.params.state]}</option>
                        </select>	
                        <h5 className='cit'>City: </h5>
                        <input style={{color: '#F36B6B'}} type="text" readOnly value={this.props.view.params.city} name='ch_therapy' className="" id='city' onChange={this.handleChange}/>
                    </div>
                    
                    <div className='form-group2'>
                        <h5 className='mb-0'>Zip Code: </h5>
                        <input style={{color: '#F36B6B'}} type="text" readOnly value={this.props.view.params.zip_code} name='zip_code' className="" id='zip_code' onChange={this.handleChange}/>
                    </div>
                    <div className='form-group2'>
                        <h5 className='mb-0'>Phone Number: </h5>
                        <input style={{color: '#F36B6B'}} type="text" readOnly value={this.props.view.params.phone_number} name='phone_number' className="" id='phone_number' onChange={this.handleChange}/>
                    </div>
                    <div className='form-group2 journalNote3'>
                        <h5 className='mb-0'>Note: </h5>
                        <textarea style={{color: '#F36B6B'}} readOnly placeholder='type here' value={this.props.view.params.note} id ='note' type="text"/>
                    </div>
                </form>
                <div className='guest2 mb-5' onClick={() => this.deleteId(this.props.view.params.doctor_id)}>Click here to delete Doctor</div>
            </div>
        )
    }
}