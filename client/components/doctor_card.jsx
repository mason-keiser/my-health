import React from 'react';

export default function Doctor_Card(props) {
    return (
        <div>
            <div className="card border-0" >
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