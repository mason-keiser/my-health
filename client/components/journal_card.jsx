import React from 'react';

export default function Pain_Card(props) {
    return (
        <div>
            <div className="card border-0" 
                onClick={() => props.setView('journal_note',{
                journal_id: props.journal.journal_id,
                user_id: props.journal.user_id,
                journal: props.journal.journal,
                date_id: props.journal.date_id
                })}>
                <div className="card-body">
                    <h1 className="card-title">{props.journal.date_id}</h1>
                    <h3 className='ml-3 pl-3'>{props.journal.journal}</h3>
                </div>
            </div>
        </div>
    )
}