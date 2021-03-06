import React from 'react';
import Main_Page_Header from './main_page_header'
import {
    Link,
    animateScroll as scroll
  } from 'react-scroll';


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

    handleSubmit(callback) {
        event.preventDefault()
        const obj = {
            user_id: this.props.user.user_id,
            med_name: this.state.med_name,
            med_instructions: this.state.med_instructions,
            med_image: this.state.previewSource
        }
        const req = document.getElementById('required')
        if (obj.id === null) {
            req.textContent = 'server side error'
            req.style.color = 'red'
        } if (obj.med_name === '') {
            document.getElementById('med_name').style.borderColor = 'red'
            req.textContent = '* red fields are required for submission'
            req.style.color = 'red'
        } if (obj.med_instructions === '') {
            document.getElementById('med_instructions').style.borderColor = 'red'
            req.textContent = '* red fields are required for submission'
            req.style.color = 'red'
        } if (obj.med_image === null) {
            document.getElementById('label').style.borderColor = 'red'
            req.textContent = '* red fields are required for submission'
            req.style.color = 'red'
        }else {
          callback(obj);
        }
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
                    <h4 onClick={() => this.props.setView('medications',{})}>Saved Medications</h4>
                </div>
                <form onSubmit={() => this.handleSubmit(this.props.postMed)}>
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
                        <input type="file" placeholder='Type Here' name='img' accept='images/*;capture=camera' className="" id='med_img' onChange={this.handleFile}/>
                        <div className="label mb-3" >
                            <label htmlFor="med_img" className="image_upload">Add Image</label>
                        </div>
                        <div className="previewImg" id='label'>
                            {this.state.previewSource !== null ? (
                                <img src={this.state.previewSource} id='label' alt="chosen"/>
                                ) : null
                            }
                        </div>
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