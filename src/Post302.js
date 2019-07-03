import React from 'react';
import Picture from './Picture';

class Post302 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            img: props.img,
            header: props.header,
        }
    }
    render(){
        return(
            <div className="Post">
                <div className="post-container">
                    <div className="post-header">
                        <div className="postTime">{this.state.header}</div>
                    </div>
                    <Picture
                        img={this.state.img}
                        hiddenColor={"gray"}
                        hiddenColorOpacity={"0.9"}
                        hiddenText={"You have to authorize to see this post's information"}
                        hiddenTextColor={"lightgray"}
                        hiddenTextSize={"20px"}
                    />
                    <div className="comments">
                        <div className="logTocomment">
                            <a href="">Log in</a> to see comments
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post302;