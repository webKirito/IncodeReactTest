import React, { Component } from "react";


export default class Client extends Component {
    constructor(props) {
        super(props);
        this.info = this.props.info;
    }

    componentDidUpdate() {
            
    }
    
    render() {
        if (this.props.info) {
            console.log('Person with info was rendered', this.info)
            return(
                <div className = 'clientInfo'>
                    <h1>General</h1>
                    <div>Name: {this.props.info.general.firstName}</div>
                    <div>Lastname: {this.props.info.general.lastName}</div>
                    <div>Job: {this.props.info.job.title}</div>
                </div>
            )
        } else {
            // console.log('Person with info was rendered', this.info)
            return '';
        }
    }

}