import React from 'react';

export default class Pain_History extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return(
            <div>
                <h1 className="paintitle" onClick={() => this.props.setView('main',{})}>My Health ♡</h1>
                <div className="backbuttons">
                    <h4 onClick={() => this.props.setView('main',{})}>Home</h4>
                    <h4 style={{color: 'white'}} onClick={() => this.props.setView('pain_history',{})}>History</h4>
                </div>
            </div>
        )
    }
}