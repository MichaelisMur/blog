import React from 'react';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    mouseOver(e){
        e.target.children[0].style.width="100%"
    }
    mouseOut(e){
        e.target.children[0].style.width="0%"
    }
    render(){
        return(
            <div className="Header">
                <div className="innerHeader">
                    <div className="left">
                        <div className="headerPart"
                            onMouseOver={this.mouseOver}
                            onMouseOut={this.mouseOut}
                        >
                            Home page
                            <div className="headerLine"></div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="headerPart"
                            onMouseOver={this.mouseOver}
                            onMouseOut={this.mouseOut}
                        >
                            Portfolio
                            <div className="headerLine"></div>
                        </div>
                        <div className="headerPart"
                            onMouseOver={this.mouseOver}
                            onMouseOut={this.mouseOut}
                        >
                            Contacts
                            <div className="headerLine"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        window.addEventListener("scroll", (e)=>{
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
        })
    }
}

export default Header;