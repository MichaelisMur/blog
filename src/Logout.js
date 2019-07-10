import React from 'react';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const Logout = (props) => {
    if(props.showLogOut){
        return(
            <div className="headerPart"
                onMouseOver={props.mouseOver}
                onMouseOut={props.mouseOut}
                onClick={()=>{
                    cookies.remove("username", { path: '/'});
                    window.location = "/";
                }}
            >
                Log out
                <div className="headerLine"></div>
            </div>
        )
    } else {
        return(
            <div></div>
        )
    }
}

export default Logout;