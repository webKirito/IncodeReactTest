import React, { Component } from "react";
import Storage from '../AdditionalClasses/Storage';
import ClientList from "./ClientList";
import Client from "./Client";


const Store = new Storage();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients : Store.getClients(),
      currentClient : ''
    }
    this.getMoreInfo = this.getMoreInfo.bind(this);
  }

  getMoreInfo(str) {
    if (this.stringIsValid(str)) {
      const currentClient = this.findClient(str);
      this.setState({
        ...this.state,
        currentClient : currentClient
      })
    }
    
  }

  componentDidMount() {
    
  }

  componentWillMount() {
   
  }

  componentDidUpdate() {
    console.log(this.state.currentClient);
  }

  findClient(str) {
    const [fName, sName] = str.split(" ");
    return this.state.clients.find((client) => client.general.firstName === fName && client.general.lastName === sName);
  }

  stringIsValid(str) {
    return (str.trim()) ? true : false;
  }


  render() {
    return (
      [
        <ClientList key='clientList' onClick = {this.getMoreInfo} clients = {this.state.clients}/>,
        <Client key='clientContainer' info = {this.state.currentClient}/>
      ]
      );
  }
}
  