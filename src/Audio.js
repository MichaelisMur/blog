import React from 'react'

export default class Audio extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: props.name,
            playing: 0,
            size: "28px",
            sec: "00",
            min: "0",
            durSec: "00",
            durMin: "0",
            musicCB: props.musicCB
        }
        this.enlargeButton = this.enlargeButton.bind(this);
        this.progress = this.progress.bind(this);
        this.load = this.load.bind(this);
        this.play = this.play.bind(this);
        this.stop = this.stop.bind(this);
        this.myRef = React.createRef()
    }
    componentWillReceiveProps(props){
        this.setState({playing: props.playing})
        if(!this.myRef.current) return
        if(props.playing){
            this.myRef.current.play()
        } else {
            this.myRef.current.pause()
        }
    }
    enlargeButton(){
        setTimeout(()=>{
            this.setState({
                size: "28px"
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
            let durMin = Math.floor(target.duration/60).toString();
            let durSec = Math.floor(target.duration%60).toString();
            return({
                durMin, durSec: durSec.length === 1 ? `0${durSec}` : durSec
            })
        })
    }
    play(){
        this.myRef.current.play()
        this.enlargeButton()
        this.state.musicCB(this.state.name)
        // this.setState({
        //     size: "24px",
        //     playing: 1
        // })
    }
    stop(){
        this.myRef.current.pause()
        this.enlargeButton()
        this.state.musicCB("!!!GOVNOCODE!!!")
        // this.setState({
        //     size: "24px",
        //     playing: 0
        // })
    }
    render(){
        if(this.state.name) return(
            <div style={{width: "100%"}}>
                <div className="audioContainer">
                    <audio
                        src={`http://localhost:3001/public/audio/${this.state.name}.mp3`}
                        onTimeUpdate={this.progress}
                        onLoadedMetadata={this.load}
                        ref={this.myRef}
                    />
                    <div className="playContainer">
                        <div className="playpause"
                            onClick={(e)=>{
                                // this.setState(prevState=>{
                                if(this.state.playing){
                                    this.stop()
                                } else {
                                    this.play()
                                }
                                // })

                            }}
                            onMouseOver={()=>this.setState({size: "30px"})}
                            onMouseLeave={()=>this.setState({size: "28px"})}
                            style={{
                                backgroundImage: this.state.playing ? "url(http://localhost:3001/public/pause.png)" : "url(http://localhost:3001/public/play.png)",
                                width: this.state.size,
                                height: this.state.size
                            }}
                        ></div>
                    </div>
                    <div className="songTitle">
                        {this.state.name}
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