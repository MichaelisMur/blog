import React from 'react';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }
    render(){
        return(
            <div>
                SIGN IN
                <form
                    onSubmit={(e)=>{
                        e.preventDefault();
                        fetch("http://localhost:3001/login", {
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
                            if(response.code === 200){
                                console.log("success");
                                cookies.set("username", response.username, { path: '/' });
                                cookies.set("access_token", response.access_token, { path: '/' });
                                cookies.set("refresh_token", response.refresh_token, { path: '/' });
                            }
                            console.log(response)
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
                    <input type="submit" />
                </form>
            </div>
        )
    }
    componentDidMount(){
        cookies.set('myCat', "meow", { path: '/' });
    }
}

export default Login;