import React from 'react';

const colorObj = {
    1: '#08DB37', 2: '#98F877', 3: '#DBFF00', 4: '#F8FD00',
    5: '#FFAD0F', 6: '#EE731A', 7: '#EC3E07', 8: '#FF0000',
    9: '#08DB37', 10: '#98F877', 11: '#DBFF00', 12: '#F8FD00',
    13: '#FFAD0F', 14: '#EE731A', 15: '#EC3E07', 16: '#FF0000'
}

export default class Pain_Card extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return(
        <div>
            <div className="card mt-2 mb-2 border-0" 
                onClick={() => this.props.setView('pain_note',{
                note_id: this.props.notes.note_id,
                user_id: this.props.notes.user_id,
                mood_level: this.props.notes.mood_level,
                pain_level: this.props.notes.pain_level,
                pain_note: this.props.notes.pain_note,
                date_id: this.props.notes.date_id
                })}>
                <div className="card-body">
                    <h1 className="card-title">{this.props.notes.date_id}</h1>
                    <div className="painhisButtons  ">
                        <button type='radio' style={{backgroundColor: `${colorObj[this.props.notes.pain_level]}`}} className={this.props.notes.pain_level} id='painB'></button>
                        <button type='radio' style={{backgroundColor: `${colorObj[this.props.notes.mood_level]}`}} className={this.props.notes.mood_level} id='moodB'></button>  
                    </div>
                    <h3 className='ml-3 pl-3'>{this.props.notes.pain_note}</h3>
                </div>
            </div>
        </div>
        )
    }
}