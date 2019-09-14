import React from 'react'
import Cookies from 'universal-cookie'
import Header from './Header'
const cookies = new Cookies();

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            responded: 0,
            response: "",
            error: "",
            success: false,
            usernameErr: false,
            passwordErr: false,
            usernameTyped: false,
            passwordTyped: false
        }
    }
    render(){
        return(
            <div>
                <Header
                    line={true}
                    isStatic={true}
                />
                <div className="loginContainer">
                    <form
                        style={{width: "100%"}}
                        onSubmit={(e)=>{
                            e.preventDefault();
                            if(!this.state.usernameTyped || this.state.username.length<3) return this.setState({
                                usernameErr: true
                            })
                            if(!this.state.passwordTyped || this.state.password.length<3) return this.setState({
                                passwordErr: true
                            })
                            if(this.state.usernameErr || this.state.passwordErr) return
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
                                if(!response.error){
                                    this.setState({ allDone: true })
                                    cookies.set('username', response.username, { path: '/' });
                                    cookies.set("id", response.id, { path: '/' });
                                    cookies.set('access_token', response.access_token, { path: '/' });
                                    cookies.set('refresh_token', response.refresh_token, { path: '/' });
                                    console.log(response);
                                } else {
                                    this.setState({
                                        username: "",
                                        password: "",
                                        passwordagain: "",
                                        error: response.error
                                    })
                                }
                            })
                            .catch(error => console.error('Error:', error));
                        }}
                    >    
                        {/* <div style={{textAlign: "center", padding: "5px 0"}}>
                            REGISTER
                        </div> */}
                        <input name="username" placeholder="Username"
                            autoFocus
                            onChange={(e)=>{
                                this.setState({
                                    username: e.target.value,
                                    error: "",
                                    usernameErr: false,
                                    usernameTyped: true
                                })
                            }}
                            value = {this.state.username}
                        />
                        <div
                            style={{
                                display: this.state.usernameErr?"block":"none"
                            }}
                        >
                            Enter your username, nigga :/
                        </div>
                        <input name="password" placeholder="Password"
                            type="password"
                            onChange={(e)=>{
                                this.setState({
                                    password: e.target.value,
                                    error: "",
                                    passwordErr: false,
                                    passwordTyped: true
                                })
                            }}
                            value = {this.state.password}
                        />
                        <div
                            style={{
                                display: this.state.passwordErr?"block":"none"
                            }}
                        >
                            Das Passwort bitte
                        </div>
                        <input name="password" placeholder="Password again"
                            type="password"
                            onChange={(e)=>{
                                this.setState({

                                })
                            }}
                            value = {this.state.passwordagain}
                        />
                        <div
                            style={{
                                display: this.state.error?"block":"none"
                            }}
                        >
                            {this.state.error}
                        </div>
                        
                        <div style={{textAlign: "center", padding: "5px 0"}}>
                            <input type="submit" value="Sign Up" className="loginButton" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
    componentDidMount(){
        cookies.set('myCat', "meow", { path: '/' });
    }
}

export default Register;