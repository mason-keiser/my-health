import React from 'react';

export default function Initial (props) {
    let ent = (window.screen.width > 400) 
        ? <h5>Click to start</h5>
        : <h5>Tap to start</h5>
    return (
        <div onClick={() => props.setView('login', {})} className="initContainer">
            <h1 className="m-5">
                My Health ♡
            </h1>
            {ent}
        </div>
    );
}