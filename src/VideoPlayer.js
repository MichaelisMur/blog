import React from 'react'

export default class VideoPlayer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            link: "",
            fetching: false
        }
    }
    componentWillReceiveProps(props){
        this.setState({
            link: props.link,
            fetching: props.fetching
        })
    }
    render(){
        if(this.state.fetching){
            return(
                <div>
                    AAAAAAAA LOADING!!!!!!!!!!!!!!!!!!
                    AAAAAAAA LOADING!!!!!!!!!!!!!!!!!!
                    AAAAAAAA LOADING!!!!!!!!!!!!!!!!!!
                    AAAAAAAA LOADING!!!!!!!!!!!!!!!!!!
                    AAAAAAAA LOADING!!!!!!!!!!!!!!!!!!
                </div>
            )
        }
        return(
            <video controls height="300">
                <source  src={this.state.link} type="video/webm" />
            </video>
        )
    }
}