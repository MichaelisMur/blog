import React from 'react';
import Picture from '../Picture';
import {Link} from 'react-router-dom';

class Post301 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            img: props.img,
            header: props.header,
            hiddenColor: props.hiddenColor,
            hiddenColorOpacity: props.hiddenColorOpacity,
            hiddenText: props.hiddenText,
            hiddenTextColor: props.hiddenTextColor,
            hiddenTextSize: props.hiddenTextSize,
            post_id: props.post_id
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
                        hiddenColor={this.state.hiddenColor}
                        hiddenColorOpacity={this.state.hiddenColorOpacity}
                        hiddenText={this.state.hiddenText}
                        hiddenTextColor={this.state.hiddenTextColor}
                        hiddenTextSize={this.state.hiddenTextSize}
                        post_id={this.state.post_id}
                    />
                    <div className="comments">
                        <div className="logTocomment">
                        <Link to="/login">Log in</Link> to see comments
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post301;