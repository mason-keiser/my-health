import React from 'react';
import Pain_Card from './pain_card';
import Main_Page_Header from './main_page_header';
import {
    Row,
    Col
  } from 'reactstrap';
  import {
    Link,
    animateScroll as scroll
  } from 'react-scroll';



export default class Pain_History extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pain_notes: []
        }
        this.getPainNotes = this.getPainNotes.bind(this);
    }

    componentDidMount() {
        this.getPainNotes();
    }

    getPainNotes(){
        const id = Number(this.props.user.user_id)
        if (this.props.user.user_id !== null) {
            fetch(`/api/painnotes/${id}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json'}
            })
            .then(response => {
                if (response.status === 400 || response.status === 404) {
                    return null
                } else {
                    return response.json();                    }
            })
            .then(result => {
                this.setState({
                    pain_notes: result
                })
            })
        }
    }

    render() {
       const list = (this.state.pain_notes !== undefined && this.state.pain_notes !== null) 
        ?  (this.state.pain_notes.map((note, index) => {
                return(
                <div className='m-auto' key={index}>
                <Pain_Card
                deleteId ={this.deleteId}
                notes ={note}
                key={note.note_id}
                setView={this.props.setView}/>
                </div>
                );
            })
        )
        : <h2 className="empty mt-5" style={{margin: 'auto'}}>No Pain History available, please add new pain note to view history</h2>

        return(
            <div>
                <Main_Page_Header setView={this.props.setView}/>
                <h1 className="paintitle" onClick={() => this.props.setView('main',{})}>My Health ♡</h1>
                <div className="backbuttons m-4">
                    <h4 onClick={() => this.props.setView('main',{})}>Go Home</h4>
                    <h4 style={{color: 'white'}}onClick={() => this.props.setView('pain',{})}>Pain Today</h4>
                </div>
                <div className='journalButton mb-3'>
                    <button type='submit' className='btn' onClick={() => this.props.setView('pain', {})}>Add to History</button>
                </div>
                <Row className="row-cols-md-2">
                    {list}
                </Row>
                <div className='top' onClick = {() => scroll.scrollToTop()}>▲</div>
            </div>
        )
    }
}