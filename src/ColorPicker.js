import React from 'react';

class ColorPicker extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            red: 255,
            green: 255,
            blue: 255
        }
    }

    


    render(){
        return(
            <div>
                <div className="palette">
                    <div className="picker"
                        style={{background: `rgb(${this.state.red}, 0, 0)`}}
                    >
                        <h2>red</h2>
                        <h2>{this.state.red}</h2>
                        <input type="range" min="0" max="255" id="redpicker"
                            onChange={(e)=>{
                                this.setState({
                                    red: e.target.value
                                })
                            }}
                            value={this.state.red}
                        ></input>
                    </div>
                    <div className="picker"
                        style={{background: `rgb(0, ${this.state.green}, 0)`}}
                    >
                        <h2>green</h2>
                        <h2>{this.state.green}</h2>
                        <input type="range" min="0" max="255"  id="greenpicker"
                            onChange={(e)=>{
                                this.setState({
                                    green: e.target.value
                                })
                            }}
                            value={this.state.green}
                        ></input>
                    </div>
                    <div className="picker"
                        style={{background: `rgb(0, 0, ${this.state.blue})`}}
                    >
                        <h2>blue</h2>
                        <h2>{this.state.blue}</h2>
                        <input type="range" min="0" max="255" id="bluepicker"
                            onChange={(e)=>{
                                this.setState({
                                    blue: e.target.value
                                })
                            }}
                            value={this.state.blue}
                        ></input>
                    </div>
                </div>
                <div className="yourColor"
                    style={{background: `rgba(${this.state.red}, ${this.state.green}, ${this.state.blue})`}}
                >

                </div>
            </div>
            
        )
    }
}

export default ColorPicker