import React from 'react';

export default function Welcome (props) {
    return (
        <div className='wel'>
            <h1 className="title" onClick={() => props.setView('main',{})}>My Health ♡</h1>
            <h2 className='title3'>Welcome to My Health™, My Health is a medical journal for users that want to keep track of their daily symptoms and manage their pain levels. This application will allow you to do the following things:</h2>
            <h3 className='title3'> •  Input daily pain level and mood level </h3>
            <h3 className='title4'> •  Keep a medical journal for everything you need to keep track of  </h3>
            <div className='startButton'>
                <button onClick={() => props.setView('main', {})} type='submit' className='btn'>Start</button>
            </div>
        </div>
    )
}