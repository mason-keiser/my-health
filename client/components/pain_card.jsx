import React from 'react';

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