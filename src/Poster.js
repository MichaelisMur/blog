import React from 'react';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Poster extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render(){
        return(
            <div className="Poster"
                onClick={()=>{
                    console.log(cookies.get("username"));
                    console.log(cookies.get("access_token"));
                    console.log(cookies.get("refresh_token"));
                }}
            >
                <h1>
                    Д И З А Й Н
                </h1>
                <h2>
                    {this.state.value}
                </h2>
            </div>
        )
    }
}

export default Poster;