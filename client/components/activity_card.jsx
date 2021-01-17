import React from 'react';

export default function Activity_Card(props) {
    return (
        <div>
            <div className="card border-0" 
                onClick={() => props.setView('activity_entry',{
                journal_id: props.activity.activity_id,
                user_id: props.activity.user_id,
                journal: props.activity.activity_name,
                date_id: props.activity.activity_description
                })}>
                <div className="card-body">
                    <h1 className="card-title">{props.activity.activity_name}</h1>
                    <h3 className=''>{props.activity.activity_description}</h3>
                </div>
            </div>
        </div>
    )
}