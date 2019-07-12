import React from 'react';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Request extends React.Component{
    constructor(){
        super();
        this.setState = {

        }
    }
    requset(){
        fetch("http://localhost:3001/refreshtoken", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: cookies.get("username"),
                access_token: cookies.get("access_token"),
                refresh_token: cookies.get("refresh_token")
            })
        }).then(res=>res.json())
        .then(response=>{
            cookies.set("access_token", response.access_token, {path: "/"});
            cookies.set("refresh_token", response.refresh_token, {path: "/"});
        })
    }
    render(){
        return(
            <div>
                <button
                    onClick={this.requset}
                >
                    click me
                </button>
            </div>
        )
    }
}

export default Request;