import React from 'react'
import Header from './Header'

export default class Stat extends React.Component{
    constructor(){
        super();
        this.state={
            data: [
            ]
        }
    }
    componentWillMount(){
        window.scrollTo(0,0)
    }
    componentDidMount(){
        fetch("http://localhost:3001/stat", {
            method: "POST",
            body: JSON.stringify({}),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res=>res.json())
        .then(data=>{
            this.setState({
                data
            })
            
            window.scrollTo(0,0);
        })
    }
    render(){
        return(
            <div className="shit">
                <Header
                    line={1}
                />
                <div className="newForm">
                    <div className="dnd"
                        style={{background: this.state.DNDstatus}}
                        onDoubleClick={()=>{
                            document.querySelector(".newForm>input").click()
                        }}
                    >
                    </div>
                    <input type="file" style={{display: "none"}} 
                        onChange={(e)=>{
                            this.setState({
                                DNDstatus: "red",
                                data: e.target.files[0]
                            })
                        }}
                    />
                </div>
                
                
            </div>
        )
    }
}