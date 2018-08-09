import React, { Component } from "react";
import SearchClientInput from './SearchClientInput';


const Client = (name, key, photoUrl, onClick, index) => {
    
    return (
        <div key = {key} className={`clientItem ${key === index ? 'clientChoosen' : ''}`} onClick = {() => onClick(name, key , index)} >
            <div className="img">
                <img src={`${photoUrl}`} alt=""/>
            </div> 
            <div>{name}</div>
        </div>  
    );
}

const NoClients = ({isShown}) => {
    return (
        <div className={`clientItem attention ${isShown ? '' : 'hidden'}`} >
            <div>Sorry, but there is nothing by your request...</div>
        </div>  
    );
}

export default class ClientList extends Component {
    constructor(props) {
        super(props);
        this.initialClients = props.clients;
        this.state = {
            clients : this.initialClients,
            clientChoosen : -1,
            noResults : false
        };
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onClientChoose = this.onClientChoose.bind(this);
    }

    onClientChoose(key) {
        this.setState({
            ...this.state,
            clientChoosen: key
        })
    }

    onClick(str, key) {
        this.props.onClick(str);
        this.onClientChoose(key);
    }

    onChange(str) {
        if (str.trim()) {
            str = str.toLowerCase();
            const clientsArr = [...this.initialClients].filter(({general}) => {
                return general.firstName.toLowerCase().startsWith(str) || general.lastName.toLowerCase().startsWith(str);
            })
            this.setState({
                clientChoosen : -1,
                clients : clientsArr,
                noResults : clientsArr.length > 0 ? false : true 
            })
        } else {
            this.setState({
                clientChoosen : -1,
                clients : this.initialClients,
                noResults : false
            });
        }
    }
    render() {
        return(
            <div className="clientList">
                <SearchClientInput onChange = {this.onChange}/>
                {
                    this.state.clients.map(({general}, index) => { return Client(`${general.firstName} ${general.lastName}`, index, general.avatar, this.onClick , this.state.clientChoosen)})
                }
                <NoClients isShown={this.state.noResults}/>
            </div>
        )
    }

}