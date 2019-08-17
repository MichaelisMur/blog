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
            showLogOut: 0,
            line: props.line,
            headerLine: {},
            isStatic: props.isStatic
        }
        this.Scroll = this.Scroll.bind(this)
    }
    mouseOver(e){
        e.target.children[0].style.width="100%"
    }
    mouseOut(e){
        e.target.children[0].style.width="0%"
    }
    Scroll(){
        if(!this.state.isStatic){
            if(window.scrollY>0){
                document.querySelectorAll(".headerLine").forEach(el=>{
                    el.style.background = "black";
                    el.parentElement.style.color = "black";
                })
                document.querySelector(".Header").style.background = "white";
                document.querySelector(".Header").style.borderBottom = "1px solid rgb(235, 235, 235)";
            } else {
                document.querySelectorAll(".headerLine").forEach(el=>{
                    el.style.background = "white";
                    el.parentElement.style.color = "white";
                })
                document.querySelector(".Header").style.background = "rgba(0,0,0,0)";
                document.querySelector(".Header").style.borderBottom = "none";
            }
        }
    }
    componentWillMount(){
        if(cookies.get("username")){
            let left = [
                {
                    title: "MichaelisMur",
                    destination: ""
                },
            ]
            let right = [
                {
                    title: "Contacts",
                    destination: "/stat"
                },
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
                    destination: "/stat"
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
            <div>
                <div className="HeaderLine"
                    style={{
                        height: this.state.headerLine.height
                    }}
                ></div>
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
            </div>
            
        )
    }
    componentDidMount(){
        if(this.state.isStatic){
            document.querySelectorAll(".headerLine").forEach(el=>{
                el.style.background = "black";
                el.parentElement.style.color = "black";
            })
            document.querySelector(".Header").style.background = "white";
            document.querySelector(".Header").style.borderBottom = "1px solid rgb(235, 235, 235)";
        }
        if(document.querySelectorAll(".headerLine")){
            window.addEventListener("scroll", this.Scroll);
        }
        // console.log(document.querySelector(".Header").clientHeight)
        this.setState({
            headerLine: {
                height: this.state.line ? document.querySelector(".Header").clientHeight-1 : ""
            }
        })
    }
    componentWillUnmount(){
        window.removeEventListener("scroll", this.Scroll);
    }
}

export default Header;