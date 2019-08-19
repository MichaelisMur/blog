import React from 'react';
import Cookies from 'universal-cookie';
import Header from './Header'
const cookies = new Cookies();

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            error: "",
            success: false,
            usernameTyped: false,
            passwordTyped: false
        }
    }
    render(){
        if(this.state.success){
            return(
                <div>
                    <Header
                        line={true}
                        isStatic={true}
                    />
                    <div className="loginContainer">
                        success
                    </div>
                </div>
            )
        } else {
            return(
                <div>
                    <Header
                        line={true}
                        isStatic={true}
                    />
                    <div className="loginContainer">
                        LOGIN
                        <form

                        onSubmit={(e)=>{
                            e.preventDefault();
                            if(!this.state.usernameTyped || this.state.username.length<3) return this.setState({
                                usernameErr: true
                            })
                            if(!this.state.passwordTyped || this.state.password.length<3) return this.setState({
                                passwordErr: true
                            })
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
                                if(!response.error){
                                    console.log(response.admin)
                                    this.setState({success: true})
                                    cookies.set("username", response.username, { path: '/' })
                                    cookies.set("access_token", response.access_token, { path: '/' })
                                    cookies.set("refresh_token", response.refresh_token, { path: '/' })
                                    cookies.set("admin", response.admin, { path: '/' })
                                    window.location = "/"
                                } else {
                                    this.setState({
                                        username: "",
                                        password: "",
                                        error: response.error
                                    })
                                }
                                console.log(response)
                            })
                            .catch(error => console.error('Error:', error));
                        }}
                            >
                                
                                <label>username</label>
                                <input placeholder="username"
                                    autoFocus
                                    style={{
                                        border: this.state.usernameErr ? "1px solid rgb(255, 132, 132)" : "1px solid lightgray",
                                        background: this.state.usernameErr ? "rgb(255, 199, 199)" : "white"
                                    }}
                                    onChange={(e)=>{
                                        this.setState({
                                            username: e.target.value,
                                            error: "",
                                            usernameErr: false,
                                            usernameTyped: true
                                        })
                                    }}
                                    value={this.state.username}
                                />
                                <label>password</label>
                                <input placeholder="password"
                                    style={{
                                        border: this.state.passwordErr ? "1px solid rgb(255, 132, 132)" : "1px solid lightgray",
                                        background: this.state.passwordErr ? "rgb(255, 199, 199)" : "white"
                                    }}
                                    onChange={(e)=>{
                                        this.setState({
                                            password: e.target.value,
                                            error: "",
                                            passwordErr: false,
                                            passwordTyped: true
                                        })
                                    }}
                                    value={this.state.password}
                                />
                                <div className="loginError">
                                    {this.state.error}
                                </div>
                                <input type="submit" />
                            </form>
                        </div>
                </div>
            )
            
        }
    }
}

export default Login;