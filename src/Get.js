import React from 'react';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Get extends React.Component{
    constructor(){
        super();
        this.state = {
            
        }
        this.get = this.get.bind(this);
    }
    get(){
        fetch("http://localhost:3001/get", {
            method: "POST",
            body: JSON.stringify({
                access_token: cookies.get("access_token"),
                username: cookies.get("username")
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(response => {
            console.log(response);
        })
        .catch(error => console.error('Error:', error));
    }
    render(){
        return(
            <div className="Get">
                <form
                    onSubmit={(e)=>{
                        e.preventDefault();
                        this.get();
                    }}
                >
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default Get;