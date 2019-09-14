import React from 'react'

export default class Secret extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        navigator.mediaDevices.getUserMedia({video: true})
        .then((stream) => {
            console.log(stream)
        });
        return(
            <div>

            </div>
        )
    }
}