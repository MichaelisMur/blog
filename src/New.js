import React from 'react'
import Header from './Header'
import Cookies from 'universal-cookie'
import Refresh from './Refresh'
import moment from 'moment'
import Post200 from './Posts/Post200'
// import DND from './DND'
const cookies = new Cookies();

class New extends React.Component{
    constructor(){
        super();
        this.state={
            hiddenText: "Sample",
            authCode: 0,
            unauthCode: 0,
            hiddenTextSize: "30",
            hiddenTextColor: "black",
            hiddenColor: "white",
            hiddenColorOpacity: "0.5",
            DNDstatus: "white",
            img: "",
            imageSent: false,
            imageUrl: "",
            post_id: "",
            comments: [],
            allDone: false,
            red: 255,
            green: 255,
            blue: 255
        }
        this.send = this.send.bind(this);
        this.loadNudes = this.loadNudes.bind(this);
    }
    send(){
        console.log(cookies.get("access_token"));
        const fun = ()=>{
            fetch("http://localhost:3001/new", {
                method: 'POST',
                body: JSON.stringify({
                    id: this.state.post_id,
                    hiddenColor: this.state.hiddenColor || `rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})`,
                    hiddenColorOpacity: `${this.state.hiddenColorOpacity}`,
                    hiddenText: `${this.state.hiddenText}`,
                    hiddenTextSize: this.state.hiddenTextSize,
                    hiddenTextColor: this.state.hiddenTextColor,
                    authCode: this.state.authCode,
                    unauthCode: this.state.unauthCode,
                    access_token: cookies.get("access_token"),
                    username: cookies.get("username"),
                }),
                headers:{
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
            .then(response => {
                this.setState({

                })
            })
            .catch(error => console.error('Error:', error));
        }
        Refresh(fun)
    }
    loadNudes(){
        const fun = ()=>{
            const formData = new FormData();
            formData.append('file', this.state.data);
            formData.append('name', this.state.name);
            formData.append('access_token', cookies.get("access_token"));
            formData.append('username', cookies.get("username"));

            fetch('http://localhost:3001/upload', {
                method: 'POST',
                body: formData,
            }).then(res=>res.json())
            .then(data=>{
                if(!data.err){
                    this.setState({
                        imageSent: true,
                        img: data.img,
                        post_id: data.id
                    })
                };
            });
        }
        Refresh(fun)
    }
    render(){
        if(!this.state.imageSent && !this.state.allDone){
            if(this.state.DNDstatus === "red"){
                this.loadNudes()
            }
            return(
                <div className="shit"
                onDropCapture={(e)=>{
                    e.preventDefault();
                    this.setState({
                        DNDstatus: "red",
                        data: e.dataTransfer.files[0]
                    })
                }}
                onDragOver={(event) => {
                    event.preventDefault();
                    this.setState({
                        DNDstatus: "blue"
                    })
                }}
                onDragLeave={()=>{
                    this.setState({
                        DNDstatus: "white"
                    })
                }}
                >
                    <Header
                        line={1}
                    />
                    <div className="newForm">
                        <div className="dnd"
                            style={{background: this.state.DNDstatus}}
                        >
                        </div>
                    </div>
                </div>
            )
        } else if(!this.state.allDone) {
            console.log(this.state.hiddenColor || `rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})`)
            return(
                <div className="shit">
                    <Header
                        line={1}
                    />
                    <div className="newForm">
                        <form
                            onSubmit={(e)=>{
                                e.preventDefault();
                                this.send();
                            }}
                        >
                            <textarea placeholder="hiddenText"
                                onChange={(e)=>{
                                    this.setState({
                                        hiddenText: `${e.target.value}`
                                    })
                                }}
                                value={this.state.hiddenText}
                            />
                            <input placeholder="hiddenTextSize"
                                onChange={(e)=>{
                                    this.setState({
                                        hiddenTextSize: e.target.value
                                    })
                                }}
                                value={this.state.hiddenTextSize}
                            />
                            <input placeholder="hiddenTextColor"
                                onChange={(e)=>{
                                    this.setState({
                                        hiddenTextColor: e.target.value
                                    })
                                }}
                                value={this.state.hiddenTextColor}
                            />
                            <input placeholder="hiddenColor"
                                onChange={(e)=>{
                                    this.setState({
                                        hiddenColor: e.target.value
                                    })
                                }}
                                value={this.state.hiddenColor}
                            />
                            <input placeholder="hiddenColorOpacity"
                                onChange={(e)=>{
                                    this.setState({
                                        hiddenColorOpacity: e.target.value
                                    })
                                }}
                                value={this.state.hiddenColorOpacity}
                            />
                            <input placeholder="authCode"
                                onChange={(e)=>{
                                    this.setState({
                                        authCode: e.target.value
                                    })
                                }}
                                value={this.state.authCode}
                            />
                            <input placeholder="unauthCode"
                                onChange={(e)=>{
                                    this.setState({
                                        unauthCode: e.target.value
                                    })
                                }}
                                value={this.state.unauthCode}
                            />
                            <input type="submit" />
                        </form>

                        <div className="palette">
                            red
                            <input type="range" min="0" max="255" id="redpicker"
                                onChange={(e)=>{
                                    this.setState({
                                        red: e.target.value,
                                        hiddenColor: ""
                                    })
                                }}
                                value={this.state.red}
                            ></input>
                            green
                            <input type="range" min="0" max="255"  id="greenpicker"
                                onChange={(e)=>{
                                    this.setState({
                                        green: e.target.value,
                                        hiddenColor: ""
                                    })
                                }}
                                value={this.state.green}
                            ></input>
                            blue
                            <input type="range" min="0" max="255" id="bluepicker"
                                onChange={(e)=>{
                                    this.setState({
                                        blue: e.target.value,
                                        hiddenColor: ""
                                    })
                                }}
                                value={this.state.blue}
                            ></input>
                        </div>
                        <div className="yourColor"
                            style={{background: `rgba(${this.state.red}, ${this.state.green}, ${this.state.blue})`}}
                        >
                        </div>

                        <div className="example">
                            <Post200
                                post_id={this.state.post_id}
                                img={this.state.img}
                                comments={this.state.comments}
                                header={moment().format('MMMM Do YYYY, h:mm a')}
                                hiddenColor={this.state.hiddenColor || `rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})`}
                                hiddenColorOpacity={this.state.hiddenColorOpacity}
                                hiddenText={this.state.hiddenText}
                                hiddenTextColor={this.state.hiddenTextColor}
                                hiddenTextSize={this.state.hiddenTextSize}
                            />
                        </div>
                        

                    </div>
                    
                </div>
            )
        } else {
            return(
                <div>
                    THat's all
                </div>
            )
        }
        
    }
    componentDidMount(){
    }
}

export default New;