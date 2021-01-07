import React from 'react';
import Pain_Card from './pain_card';

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
                    console.log("couldn't fetch notes");
                    return
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
       const list = (this.state.pain_notes !== null) 
        ?  (this.state.pain_notes.map((note, index) => {
                return(
                <Pain_Card
                notes ={note}
                key={note.note_id}
                setView={this.props.setView}/>
                );
            })
        )
        : null

        return(
            <div>
                <h1 className="paintitle" onClick={() => this.props.setView('main',{})}>My Health ♡</h1>
                <div className="backbuttons m-4">
                    <h4 onClick={() => this.props.setView('main',{})}>Home</h4>
                    <h4 onClick={() => this.props.setView('pain',{})}>Pain Today</h4>
                </div>
                <div>
                    {list}
                </div>
            </div>
        )
    }
}