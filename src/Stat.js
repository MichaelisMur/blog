import React from 'react';
import Header from './Header';
import StatEl from './StatEl';
import { Segment } from 'semantic-ui-react'

export default class Stat extends React.Component{
    constructor(){
        super();
        this.state={
            data: [
            ]
        }
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
                <Segment compact>
                   <div className="stat">
                        {this.state.data.map((el, key)=>(
                            <StatEl
                                username={el.username}
                                vip={el.vip}
                                key={key}
                            />
                        ))}
                    </div> 
                </Segment>
                
                
            </div>
        )
    }
}