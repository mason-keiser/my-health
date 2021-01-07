import React from 'react';

function matchId_to_Color(props) {
    const colorObj = {
        1: '#08DB37', 2: '#98F877', 3: '#DBFF00', 4: '#F8FD00',
        5: '#FFAD0F', 6: '#EE731A', 7: '#EC3E07', 8: '#FF0000',
        9: '#08DB37', 10: '#98F877', 11: '#DBFF00', 12: '#F8FD00',
        13: '#FFAD0F', 14: '#EE731A', 15: '#EC3E07', 16: '#FF0000'
    }
}

export default function Pain_Card (props) {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">{props.notes.date_id}</h2>
                    <div className="buttons">
                        <button type='radio' id={props.notes.pain_level} className=''></button>
                        <button type='radio' id={props.notes.mood_level} className=''></button>  
                    </div>
                    <h3>{props.notes.pain_note}</h3>
                </div>

            </div>
        </div>
    )
}