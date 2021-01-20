import React from 'react';

export default function Medication_Card(props) {
    return (
        <div>
            <div className="card card2 border-0" 
                onClick={() => props.setView('main',{
                med_id: props.med.med_id,
                user_id: props.med.user_id,
                med_name: props.med.med_name,
                med_instructions: props.med.med_instructions,
                med_image: props.med.med_image
                })}>
                <div className="card-body">
                    <h1 className="lefT card-title">{props.med.med_name}</h1>
                    <div className="medImg  ">
                        <img src={props.med.med_image} alt=""/> 
                    </div>
                    <h6 className='lef ml-3 pl-3'>{props.med.med_instructions}</h6>
                </div>
            </div>
        </div>
    )
}