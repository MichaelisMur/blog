import React from 'react';

export default class StatEl extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username: props.username,
            vip: props.vip
        }
        this.changeRights = this.changeRights.bind(this)
    }
    changeRights(){
        fetch("http://localhost:3001/changeRights", {
            method: "POST",
            body: JSON.stringify({
                username: this.state.username,
                vip: this.state.vip
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            this.setState({
                vip: data.vip
            })
        })
    }
    render(){
        return(
            <div className="statshit">
                <span>
                    {this.state.username}
                </span>
                <span
                    onClick={this.changeRights}
                >
                    {this.state.vip}
                </span>
            </div>
        )
    }
}