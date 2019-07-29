import React from 'react';
import Refresh from './Refresh';
import VideoPlayer from './VideoPlayer';
import Header from './Header'
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default class Webm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fetching: false,
            error: false,
            link: "",
            name: ""
        }
        this.updateVid = this.updateVid.bind(this)
    }
    updateVid(){
        this.setState({fetching: true})
        const fun = (refresh) => {
            fetch("http://localhost:3001/webm", {
                method: "POST",
                body: JSON.stringify({
                    access_token: cookies.get("access_token"),
                    username: cookies.get("username")
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res=>res.json())
            .then(data => {
                if(data.error) return refresh()
                this.setState({
                    fetching: false,
                    link: data.link,
                    name: data.name
                })
                console.log(data)
            })
            .catch(err => this.setState({error: "error!!"}))
        }
        Refresh(fun)
    }
    componentDidMount(){
        this.updateVid()
    }
    render(){
        return(
            <div className="shit">
                <Header
                    line={1}
                />
                <div className="videoContent">
                    <h1>{this.state.name || this.state.error || "nothing"}</h1>
                    
                    <div className="videoContainer">
                        <VideoPlayer fetching={this.state.fetching} link={this.state.link} />
                    </div>
                    <div
                        onClick={this.updateVid}
                    >
                        Click on me
                    </div>
                </div>
            </div>
        )
    }
}