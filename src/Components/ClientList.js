import React, { Component } from "react";
import SearchClientInput from './SearchClientInput';


const Client = (name, key, photoUrl, onClick) => {
    
    return (
        <div key = {key} className='clientItem' onClick = {() => onClick(name)} className="clientItem">
            <div className="img">
                <img src={`${photoUrl}`} alt=""/>
            </div> 
            <div>{name}</div>
        </div>  
    );
}

export default class ClientList extends Component {
    constructor(props) {
        super(props);
        this.initialClients = props.clients;
        this.state = {
            clients : this.initialClients
        };
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onClick(str) {
        this.props.onClick(str);
    }

    onChange(str) {
        if (str.trim()) {
            str = str.toLowerCase();
            this.setState({
                clients : [...this.initialClients].filter(({general}) => {
                    return general.firstName.toLowerCase().startsWith(str) || general.lastName.toLowerCase().startsWith(str);
                })
            })
        } else {
            this.setState({
                clients : this.initialClients
            });
        }
    }
    render() {
        return(
            <div className="clientList">
                <SearchClientInput onChange = {this.onChange}/>
                {
                    this.state.clients.map(({general}, index) => { return Client(`${general.firstName} ${general.lastName}`, index, general.avatar, this.onClick)})
                }
            </div>
        )
    }

}