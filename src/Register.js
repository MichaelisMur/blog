import React from 'react';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            responded: 0,
            response: ""
        }
        this.onResponse = this.onResponse.bind(this);
    }
    onResponse(){
        cookies.set('username', this.state.response.username, { path: '/' });
        cookies.set("id", this.state.response.id, { path: '/' });
        cookies.set('access_token', this.state.response.access_token, { path: '/' });
        cookies.set('refresh_token', this.state.response.refresh_token, { path: '/' });
        console.log(this.state.response);
    }
    render(){
        return(
            <div>
                <h1>{this.state.responded}</h1>
                SIGN UP
                <form
                    onSubmit={(e)=>{
                        e.preventDefault();
                        fetch("http://localhost:3001/register", {
                        method: 'POST',
                        body: JSON.stringify({
                            username: this.state.username,
                            password: this.state.password
                        }),
                        headers:{
                            'Content-Type': 'application/json'
                        }
                        }).then(res => res.json())
                        .then(response => {
                            this.setState(prevState=>({
                                responded: prevState.responded === 0 ? 1 : 0,
                                response: response
                            }))
                            this.onResponse()
                        })
                        .catch(error => console.error('Error:', error));
                    }}
                >
                    <input name="username" placeholder="username"
                        onChange={(e)=>{
                            this.setState({
                                username: e.target.value
                            })
                        }}
                    />
                    <input name="password" placeholder="password"
                        onChange={(e)=>{
                            this.setState({
                                password: e.target.value
                            })
                        }}
                    />
                    <h1>DON'T FORGET YOUR PASSWORD</h1>
                    <input type="submit" />
                </form>
            </div>
        )
    }
    componentDidMount(){
        cookies.set('myCat', "meow", { path: '/' });
    }
}

export default Register;