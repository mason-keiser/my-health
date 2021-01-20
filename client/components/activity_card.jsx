import React from 'react';
import {
    Link,
    animateScroll as scroll
  } from 'react-scroll';


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
                    <h4 className='mb-2' style={{textAlign: 'center'}}>{props.activity.date_id}</h4>
                    <h5 className=''>{props.activity.activity_description}</h5>
                </div>
            </div>
        </div>
    )
}