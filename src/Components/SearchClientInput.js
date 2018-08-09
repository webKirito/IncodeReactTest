import React, { Component } from "react";

export default class SearchClientInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="searchComponent">
                <input type="text" placeholder="Search for client:" dafaultValue='' ref='clientName' onChange={() => this.props.onChange(this.refs.clientName.value)} />
            </div>
        )
    }

}