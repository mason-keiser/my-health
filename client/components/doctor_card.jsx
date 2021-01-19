import React from 'react';

export default function Doctor_Card(props) {
    return (
        <div>
            <div className="card border-0" onClick={
                () => props.setView('doctor_entry', {
                    doctor_id: props.dr.doctor_id,
                    user_id: props.user.user_id,
                    doctor_name: props.dr.doctor_name,
                    street_address: props.dr.street_address,
                    state: props.dr.state,
                    city: props.dr.city,
                    zip_code: props.dr.zip_code,
                    phone_number: props.dr.phone_number,
                    note: props.dr.note
                })
            }>
                <div className="card-body">
                    <h1 className="card-title">{props.dr.doctor_name}</h1>
                    <h6>{props.dr.street_address} <span>{props.dr.city}</span></h6>
                    <h6>{props.dr.zip_code}<span> {props.dr.state}</span></h6>
                    <h6>{props.dr.phone_number}</h6>
                </div>
            </div>
        </div>
    )
}