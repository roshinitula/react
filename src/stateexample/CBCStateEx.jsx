import React, { Component } from 'react'

export class CBCStateEx extends Component {
    constructor(){
        super();
        this.state={
            users:["divya", "569", "hyd"],
            num:100
        };
    }
    changeNumber=()=>{
        this.setState({num:200})
    }
    render() {
    return (
      <div>
        {
        this.state.users.map((user,i)=> {
            return <li key={i}>{user}</li>

        }) }

        <h1>{this.state.num}</h1>
        <button onClick={this.changeNumber}>change number</button>
      </div>
    )
  }
}

export default CBCStateEx;
