import React from 'react';
import Main_Page_Header from './main_page_header'

export default class Medication extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            med_name: '',
            med_instructions: '',
            previewSource: null,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleFile(event) {
        let reader = new FileReader(event);
        reader.onload = () => {
            if (reader.readyState === 2) {
                this.setState({
                    previewSource: reader.result
                }) 
            }
        }
        reader.readAsDataURL(event.target.files[0])
    }

    render() {
        return(
            <div>
                <Main_Page_Header setView={this.props.setView}/>
                <h1 className="paintitle" onClick={() => this.props.setView('main',{})}>My Health ♡</h1>
                <div className="backbuttons m-4">
                    <h4 onClick={() => this.props.setView('main',{})}>Go Home</h4>
                    <h4 >Saved Meds</h4>
                </div>
                <form>
                    <div className='form-group2'>
                        <h5 className='mb-0'>Medication Name: </h5>
                        <input type="text" placeholder='Type Here' name='medication_name' className="" id='med_name' onChange={this.handleChange}/>
                    </div>
                    <div className='form-group2'>
                        <h5 className='mb-0'>Medication Instructions: </h5>
                        <input type="text" placeholder='Type Here' name='medication_instructions' className="" id='med_instructions' onChange={this.handleChange}/>
                    </div>
                    <div className='form-group2'>
                        <h5 className='mb-0'>Medication Image: </h5>
                        <input type="file" placeholder='Type Here' name='img' accept='images/*' className="" id='med_img' onChange={this.handleFile}/>
                        <div className="label mb-3">
                            <label htmlFor="med_img" className="image_upload">Add Image</label>
                        </div>
                        <div className="previewImg">
                            {this.state.previewSource !== null ? (
                                <img src={this.state.previewSource} alt="chosen"/>
                                ) : null
                            }
                        </div>
                    </div>
                    <div className='signupButton mb-5'>
                         <button type='submit' className='btn mt-5'>Submit</button>
                    </div>
                </form>
               
            </div>
        )
    }
}