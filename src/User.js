import React from 'react'

export default class User extends React.Component{
    constructor(props){
        super()
        this.state = {

        }
    }
    render(){
        if(this.props.username){
            return(
                <div className="headerPartUser"
                    onClick={this.props.toggleMenu}
                >
                    <div className="headerUserVip"
                        style={{
                            color: this.props.color
                        }}
                    >
                        {this.props.vip ? "vip" : ""}
                    </div>
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="409.165px" height="409.164px" viewBox="0 0 409.165 409.164"
                        style={{height: "100%", width: "32px"}}
                    >
                        <g>
                            <path fill={this.props.color} d="M204.583,216.671c50.664,0,91.74-48.075,91.74-107.378c0-82.237-41.074-107.377-91.74-107.377
                                c-50.668,0-91.74,25.14-91.74,107.377C112.844,168.596,153.916,216.671,204.583,216.671z"/>
                            <path fill={this.props.color} d="M407.164,374.717L360.88,270.454c-2.117-4.771-5.836-8.728-10.465-11.138l-71.83-37.392
                                c-1.584-0.823-3.502-0.663-4.926,0.415c-20.316,15.366-44.203,23.488-69.076,23.488c-24.877,0-48.762-8.122-69.078-23.488
                                c-1.428-1.078-3.346-1.238-4.93-0.415L58.75,259.316c-4.631,2.41-8.346,6.365-10.465,11.138L2.001,374.717
                                c-3.191,7.188-2.537,15.412,1.75,22.005c4.285,6.592,11.537,10.526,19.4,10.526h362.861c7.863,0,15.117-3.936,19.402-10.527
                                C409.699,390.129,410.355,381.902,407.164,374.717z"/>
                        </g>
                    </svg>
                </div>
            )
        } else {
            return(
                <div>
                    
                </div>
            )
        }
    }
}