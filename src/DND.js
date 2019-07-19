import React from 'react'

class DND extends React.Component{
    constructor(props){
        super(props)
        this.state={
            status: "white",
            data: props.data,
            name: "name..?",
            postInfoSent: false
        }
        this.loadNudes = this.loadNudes.bind(this);
    }
    componentWillReceiveProps(props){
        this.setState({
            status: props.status,
            data: props.data,
            name: props.name,
            postInfoSent: props.postInfoSent
        })
    }
    componentDidUpdate(){
        if(this.state.postInfoSent){
            console.log("upd")
        }
    }
    loadNudes(){
        const formData = new FormData();

        formData.append('file', this.state.data);
        formData.append('name', this.state.name);

        fetch('http://localhost:3001/upload', {
            method: 'POST',
            body: formData,
        }).then(res=>res.json())
        .then(data=>{
            console.log("so what?");
            console.log(!data.err);
        });
    }
    render(){
        if(this.state.status==="red"){
            this.loadNudes()
        }
        return(
            <div className="dnd"
                style={{background: this.state.status}}
            >
                <p>{this.state.message}</p>
            </div>
        )
        
    }
}

export default DND