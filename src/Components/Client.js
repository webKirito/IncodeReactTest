import React, { Component } from "react";


export default class Client extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.info) {
            console.log('Person with info was rendered', this.info)
            return(
                <div className = 'clientInfo'>
                    <div className="card">
                    <h1>Photo</h1>
                        <img src={`${this.props.info.general.avatar}`} alt=""/>
                    </div>
                    <div className="card">
                        <h1>General</h1>
                        <div>Name: {this.props.info.general.firstName}</div>
                        <div>Lastname: {this.props.info.general.lastName}</div>
                        <div>Job: {this.props.info.job.title}</div>
                    </div>
                    <div className="card">
                        <h1>Contact</h1>
                        <div>Email: {this.props.info.contact.email}</div>
                        <div>Phone: {this.props.info.contact.phone}</div>
                    </div>
                    <div className="card">
                        <h1>Address</h1>
                        <div>City: {this.props.info.address.city}</div>
                        <div>Street: {this.props.info.address.street}</div>
                    </div>
                </div>
            )
        } else {
            // console.log('Person with info was rendered', this.info)
            return '';
        }
    }

}