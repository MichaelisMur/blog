import React from 'react';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class New extends React.Component{
    constructor(){
        super();
        this.state={
            hiddenText: "",
            authCode: "",
            unauthCode: ""
        }
        this.send = this.send.bind(this);
    }
    send(){
        console.log(cookies.get("access_token"));
        fetch("http://localhost:3001/new", {
            method: 'POST',
            body: JSON.stringify({
                hiddenText: this.state.hiddenText,
                authCode: this.state.authCode,
                unauthCode: this.state.unauthCode,
                access_token: cookies.get("access_token")
            }),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(response => {
            console.log(response.result);
        })
        .catch(error => console.error('Error:', error));
    }
    render(){
        return(
            <div>
                <form
                    onSubmit={(e)=>{
                        e.preventDefault();
                        this.send();
                    }}
                >
                    <input placeholder="hiddenText"
                        onChange={(e)=>{
                            this.setState({
                                hiddenText: e.target.value
                            })
                        }}
                        value={this.state.hiddenText}
                    />
                    <input placeholder="authCode"
                        onChange={(e)=>{
                            this.setState({
                                authCode: e.target.value
                            })
                        }}
                        value={this.state.authCode}
                    />
                    <input placeholder="unauthCode"
                        onChange={(e)=>{
                            this.setState({
                                unauthCode: e.target.value
                            })
                        }}
                        value={this.state.unauthCode}
                    />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default New;