import React from 'react';
import Main_Page_Header from './main_page_header'

export default class Medication_Entry extends React.Component {
    constructor(props) {
        super(props);
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
                
                </form>
               
            </div>
        )
    }
}