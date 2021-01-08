import React from 'react';

export default function Initial (props) {
    let ent = (window.screen.width > 400) 
        ? <h5 onClick={() => props.setView('login', {})}>Click here to start</h5>
        : <h5 onClick={() => props.setView('login', {})}>Tap here to start</h5>
    return (
        <div className="initContainer">
            <h1 className="m-5">
                My Health ♡
            </h1>
            {ent}
        </div>
    );
}