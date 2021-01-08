import React from 'react';

export default class Journal_History extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1 className="paintitle" onClick={() => this.props.setView('main',{})}>My Health ♡</h1>
                <div className="backbuttons m-4">
                    <h4 onClick={() => this.props.setView('main',{})}>Home</h4>
                    <h4 onClick={() => this.props.setView('journal',{})}>Journal</h4>
                </div>
            </div>
            )
    }
}