import React from 'react'
import {Link} from 'react-router-dom'
import { Scrollbars } from 'react-custom-scrollbars'

export default class Secret extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            scrollTop: 0
        }
        this.myRef = React.createRef();
        this.cursor = this.cursor.bind(this);
    }
    letsRockOn(e){
        let divs = e.target.children;
        [].forEach.call(divs, function(div) {
            let deg = Math.floor(Math.random()*90)*(-1)**Math.floor(Math.random()*2);
            let x = Math.floor(Math.random()*40)*(-1)**Math.floor(Math.random()*2);
            let y = Math.floor(Math.random()*40)*(-1)**Math.floor(Math.random()*2);
            div.style.transform = `rotate(${deg}deg) translate(${x}px, ${y}px)`;    
        });
    }
    letsRockOff(e){
        let divs = e.target.children;
        [].forEach.call(divs, function(div) {
            div.style.transform = `rotate(0deg)`;
        });
    }
    
    render(){
        return(
            <Scrollbars style={{ width: "100%", height: "100vh", backgroundColor: "red" }}
                renderThumbVertical={() =>
                    (<div style={{ backgroundColor: 'white', width: '4px', opacity: '0.5', borderRadius: "5px", cursor: "pointer"}} />)
                }
                onScroll={(e)=>{
                    this.setState({
                        scrollTop: e.target.scrollTop
                    })
                }}
            >
                
                <div className="pizdec anima" ref={this.myRef}>
                    <div className="pizdos">

                    </div>
                </div>
                <div className="secret">
                    <Link to="/">
                        <div className="secretBack enlargeCursor">
                            <img src="http://localhost:3001/public/shitcrap.png" alt="back" />
                        </div>
                    </Link>
                    <div className="secretDescription">
                        <div className="secretDescriptionText">
                            Lorem ipsum a lot of meaningless text lorem ipsum a lot of meaningless text
                            ipsum a lot text lorem ipsum of meaningless text lorem ipsum a lot of meaningless text
                            ipsum a lot of meaningless text lorem ipsum a lot of meaningless text ^_^
                        </div>
                        {/* <div className="secretDescriptionPicture">
                            <img
                                // style={{
                                //     transform: "perspective(1000px), rotateX(50deg), rotateY(5deg)"
                                // }}
                                src="https://avatars0.githubusercontent.com/u/39157013?s=400&u=db026f5ced54ce1c2522cab30e52903dc779c947&v=4" alt="harry"
                            />
                        </div> */}
                    </div>



                    <div className="secretLinks">
                        <a href="https://t.me/vergelding">
                            <div
                                onMouseOver={this.letsRockOn}
                                onMouseOut={this.letsRockOff}
                                className="enlargeCursor"
                            >
                                <span>T</span>
                                <span>E</span>
                                <span>L</span>
                                <span>E</span>
                                <span>G</span>
                                <span>R</span>
                                <span>A</span>
                                <span>M</span>
                            </div>
                        </a>
                        <a href="https://github.com/MichaelisMur">
                            <div
                                onMouseOver={this.letsRockOn}
                                onMouseOut={this.letsRockOff}
                                className="enlargeCursor"
                            >
                                <span>G</span>
                                <span>I</span>
                                <span>T</span>
                                <span>H</span>
                                <span>U</span>
                                <span>B</span>
                            </div>
                        </a>
                        <a href="https://www.instagram.com/4am_sunset/">
                            <div
                                onMouseOver={this.letsRockOn}
                                onMouseOut={this.letsRockOff}
                                className="enlargeCursor"
                            >
                                <span>I</span>
                                <span>N</span>
                                <span>S</span>
                                <span>T</span>
                                <span>A</span>
                                <span>G</span>
                                <span>R</span>
                                <span>A</span>
                                <span>M</span>
                            </div>
                        </a>
                    </div>

                </div>
            </Scrollbars>
        )
    }
    shakeThat(e){
        let x = e.clientX - document.querySelector(".secretDescriptionPicture").getBoundingClientRect().left - 275;
        let y = e.clientY - document.querySelector(".secretDescriptionPicture").offsetTop - 240 + window.pageYOffset;
        document.querySelector(".secretDescriptionPicture>img").style.transform = `perspective(1000px) 
        rotateX(${-y/window.innerHeight*5}deg) 
        rotateY(${x/window.innerWidth*5}deg)`
    }
    cursor(e){
        let pizdec = this.myRef.current;
        pizdec.style.left = e.clientX - 15 + "px";
        console.log(this.state.scrollTop)
        pizdec.style.top = e.clientY + this.state.scrollTop + window.pageYOffset -15 + "px";
    }
    componentDidMount(){
        window.addEventListener("mousemove", this.cursor)
        document.querySelectorAll(".enlargeCursor").forEach(el=>{
            el.addEventListener("mouseover", ()=>{
                document.querySelector(".pizdec>.pizdos").style.transform = "scale(2)"
            })
            el.addEventListener("mouseout", ()=>{
                document.querySelector(".pizdec>.pizdos").style.transform = "scale(1)"
            })
        })
    }
    componentWillUnmount(){
        document.querySelectorAll(".enlargeCursor").forEach(el=>{
            el.removeEventListener("mouseover", ()=>{
                document.querySelector(".pizdec>.pizdos").style.transform = "scale(1.7)"
            })
            el.removeEventListener("mouseout", ()=>{
                document.querySelector(".pizdec>.pizdos").style.transform = "scale(1)"
            })
        })
        window.removeEventListener("mousemove", this.cursor)
    }
}