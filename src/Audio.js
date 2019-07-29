import React from 'react'

export default class Audio extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: props.name,
            playing: 0,
            size: "30px",
            sec: "00",
            min: "0",
            durSec: "00",
            durMin: "0",
        }
        this.enlargeButton = this.enlargeButton.bind(this);
        this.progress = this.progress.bind(this);
        this.load = this.load.bind(this);
    }
    enlargeButton(){
        setTimeout(()=>{
            this.setState({
                size: "30px"
            })
        }, 100)
    }
    progress(e){
        let target = e.target;
        this.setState(prevState=>{
            let min = Math.floor(target.currentTime/60).toString()
            let sec = Math.floor(target.currentTime%60).toString()
            return({
                min,
                sec: sec.length === 1 ? `0${sec}` : sec,
            })
        });
    }
    load(e){
        let target = e.target;
        this.setState(()=>{
            let durMin = Math.floor(target.duration/60);
            let durSec = Math.floor(target.duration%60);
            return({
                durMin, durSec
            })
        })
    }
    render(){
        if(this.state.name) return(
            <div style={{width: "100%"}}>
                <div className="audioContainer">
                    <audio
                        src={`http://localhost:3001/public/audio/${this.state.name}.mp3`}
                        id="audio"
                        onTimeUpdate={this.progress}
                        onLoadedMetadata={this.load}
                    />
                    <div className="playContainer">
                        <div className="playpause"
                            onClick={(e)=>{
                                this.setState(prevState=>{
                                    if(prevState.playing){
                                        document.querySelector("#audio").pause()
                                        this.enlargeButton()
                                        return({
                                            size: "26px",
                                            playing: 0
                                        })
                                    } else {
                                        document.querySelector("#audio").play()
                                        this.enlargeButton()
                                        return({
                                            size: "26px",
                                            playing: 1
                                        })
                                    }
                                })

                            }}
                            onMouseOver={()=>this.setState({size: "32px"})}
                            onMouseLeave={()=>this.setState({size: "30px"})}
                            style={{
                                backgroundImage: this.state.playing ? "url(http://localhost:3001/public/pause.png)" : "url(http://localhost:3001/public/play.png)",
                                width: this.state.size,
                                height: this.state.size
                            }}
                        ></div>
                    </div>
                    <div className="songTitle">
                        people are strange - the Doors
                    </div>
                    <a href={`http://localhost:3001/public/audio/${this.state.name}.mp3`} target="_blank" rel="noopener noreferrer" download={`${this.state.name}.mp3`}>
                        {/* <div > */}
                            <img className="downloadAudio" src="http://localhost:3001/public/down.png" alt="d" />
                        {/* </div> */}
                    </a>
                    <div className="time">
                        {this.state.min}
                    </div>
                    :
                    <div className="time">
                        {this.state.sec}
                    </div>
                    /
                    <div className="time">
                        {this.state.durMin}
                    </div>
                    :
                    <div className="time">
                        {this.state.durSec}
                    </div>
                </div>
            </div>
        )
        return(
            <div></div>
        )
    }
}