import React from 'react';

export default function Activity_Card(props) {
    return (
        <div>
            <div className="card border-0" 
                onClick={() => props.setView('activity_entry',{
                activity_id: props.activity.activity_id,
                user_id: props.activity.user_id,
                date_id: props.activity.date_id,
                activity_name: props.activity.activity_name,
                activity_description: props.activity.activity_description
                })}>
                <div className="card-body">
                    <h1 className="card-title">{props.activity.activity_name}</h1>
                    <h3 className=''>{props.activity.activity_description}</h3>
                </div>
            </div>
        </div>
    )
}