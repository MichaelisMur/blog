import React from 'react';
import HeaderButton from './HeaderButton';
import Logout from './Logout';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            left: [

            ],
            right: [

            ],
            showLogOut: 0
        }
    }
    mouseOver(e){
        e.target.children[0].style.width="100%"
    }
    mouseOut(e){
        e.target.children[0].style.width="0%"
    }
    Scroll(){
        if(window.scrollY>0){
            document.querySelectorAll(".headerLine").forEach(el=>{
                el.style.background = "black";
                el.parentElement.style.color = "black";
            })
            document.querySelector(".Header").style.background = "white";
            document.querySelector(".Header").style.borderBottom = "1px solid rgb(233, 233, 233)";
        } else {
            document.querySelectorAll(".headerLine").forEach(el=>{
                el.style.background = "white";
                el.parentElement.style.color = "white";
            })
            document.querySelector(".Header").style.background = "rgba(0,0,0,0)";
            document.querySelector(".Header").style.borderBottom = "none";
        }
    }
    componentWillMount(){
        if(cookies.get("username")){
            let left = [
                {
                    title: "Home page",
                    destination: ""
                },
            ]
            let right = [
                {
                    title: "Portfolio",
                    destination: "/about"
                },
                {
                    title: cookies.get("username"),
                    destination: "/me"
                }
            ]
            this.setState({
                left,
                right,
                showLogOut: 1
            })
        } else {
            let left = [
                {
                    title: "Home page",
                    destination: ""
                },
            ]
            let right = [
                {
                    title: "Portfolio",
                    destination: "/about"
                },
                {
                    title: "Sign Up",
                    destination: "/register"
                },
                {
                    title: "Sign In",
                    destination: "/login"
                },
            ]
            this.setState({
                left,
                right,
                showLogOut: 0})
        }
    }

    render(){
        return(
            <div className="Header">
                <div className="innerHeader">
                    <div className="left">
                        {this.state.left.map((el, key)=>(
                            <HeaderButton
                                title={el.title}
                                destination={el.destination}
                                key={key}
                                mouseOver={this.mouseOver}
                                mouseOut={this.mouseOut}
                            />
                        ))}
                    </div>
                    <div className="right">
                        {this.state.right.map((el, key)=>(
                            <HeaderButton
                                title={el.title}
                                destination={el.destination}
                                key={key}
                                mouseOver={this.mouseOver}
                                mouseOut={this.mouseOut}
                            />
                        ))}
                        <Logout
                            showLogOut={this.state.showLogOut}
                            mouseOver={this.mouseOver}
                            mouseOut={this.mouseOut}
                        />
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        if(document.querySelectorAll(".headerLine")){
            window.addEventListener("scroll", this.Scroll);
        }
    }
    componentWillUnmount(){
        window.removeEventListener("scroll", this.Scroll);
    }
}

export default Header;