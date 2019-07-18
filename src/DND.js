import React from 'react';

export default class DND extends React.Component{
    constructor(props){
        super(props)
        this.state={
            status: props.status,
            data: props.data
        }
    }
    componentWillReceiveProps(props){
        this.setState({
            status: props.status,
            data: props.data
        })
    }
    render(){
        return(
            <div className="dnd">
                {this.state.status}
                
                <button
                    type="button"
                    onClick={(e)=>{
                        e.preventDefault();

                        const formData = new FormData();

                        formData.append('file', this.state.data);

                        const options = {
                        method: 'POST',
                        body: formData,
                        // If you add this, upload won't work
                        // headers: {
                        //   'Content-Type': 'multipart/form-data',
                        // }
                        };

                        fetch('http://localhost:3001/upload', options);
                        // console.log(this.state.data)
                        // fetch("http://localhost:3001/upload", {
                        //     method: "POST",
                        //     body: formData,
                        // }).then(res=>res.json())
                        // .then(data=>{
                        //     console.log(data)
                        // })
                    }}
                >push me</button>
            </div>
        )
    }
}