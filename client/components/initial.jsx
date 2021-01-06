import React from 'react';

export default function Initial () {
    let ent = (window.screen.width > 400) 
        ? <h5>Click here to start</h5>
        : <h5>Tap here to start</h5>
    return (
        <div className="initContainer">
            <h1>
                My Health ♡
            </h1>
            {ent}
        </div>
    );
}