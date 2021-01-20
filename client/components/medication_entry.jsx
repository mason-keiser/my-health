import React from 'react';
import Main_Page_Header from './main_page_header'

export default class Medication_Entry extends React.Component {
    constructor(props) {
        super(props);
        this.deleteId = this.deleteId.bind(this);
    }

    deleteId(id) {
        fetch('/api/deleteMed', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({
            med_id: id
          })
        })
        .then(response => {
          return response.json();
        }).then(result => {
            this.props.setView('medications',{})
        })
    }

    render() {
        return(
            <div>
                <Main_Page_Header setView={this.props.setView}/>
                <h1 className="paintitle" onClick={() => this.props.setView('main',{})}>My Health ♡</h1>
                <div className="backbuttons m-4">
                    <h4 onClick={() => this.props.setView('main',{})}>Go Home</h4>
                    <h4 onClick={() => this.props.setView('medications',{})}>Saved Meds</h4>
                </div>
                <form>
                    <div className='form-group2'>
                        <h5 className='mb-0'>Medication Name: </h5>
                        <input style={{color: '#F36B6B'}} type="text" readOnly value={this.props.view.params.med_name} name='medication_name' className="" id='med_name'/>
                    </div>
                    <div className='form-group2'>
                        <h5 className='mb-0'>Medication Instructions: </h5>
                        <input style={{color: '#F36B6B'}} type="text" readOnly value={this.props.view.params.med_instructions} name='medication_instructions' className="" id='med_instructions' />
                    </div>
                    <div className='form-group2'>
                        <h5 className='mb-0'>Medication Image: </h5>
                        <input type="file"  name='img' readOnly accept='images/*' className="" id='med_img' />
                        <div className="previewImg">
                            {this.props.med_image !== null ? (
                                <img src={this.props.view.params.med_image} alt="chosen"/>
                                ) : null
                            }
                        </div>
                    </div>
                    <div className='guest2 mb-5 mt-4' onClick={() => this.deleteId(this.props.view.params.med_id)}>Click here to delete Activity</div>       
                </form>
               
            </div>
        )
    }
}