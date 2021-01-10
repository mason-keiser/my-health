import React from 'react';

export default function Treatment_Card(props) {
    const mb = (props.tx.mb_therapy !== null)
        ? <h3 className='mb'>• {props.tx.mb_therapy}</h3>
        : null
    const ch = (props.tx.ch_therapy !== null)
        ? <h3 className='ch'>• {props.tx.ch_therapy}</h3>
        : null
    const p = (props.tx.p_therapy !== null)
        ? <h3 className='p'>• {props.tx.p_therapy}</h3>
        : null
    const m = (props.tx.meds !== null)
        ? <h3 className='m'>• {props.tx.meds}</h3>
        : null
    return (
        <div>
            <div className="card border-0" onClick={() => props.setView('treatment_entry',{
                tx_id: props.tx.tx_id,
                user_id: props.tx.user_id,
                meds: props.tx.meds,
                date_id: props.tx.date_id,
                p_therapy: props.tx.p_therapy,
                mb_therapy: props.tx.mb_therapy,
                ch_therapy: props.tx.ch_therapy
                })}>
                <div className="card-body">
                    <h1 className="card-title">{props.tx.date_id}</h1>
                    {mb}
                    {ch}
                    {p}
                    {m}
                </div>
            </div>
        </div>
    )
}