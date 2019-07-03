import React from 'react';
import Picture from './Picture';

class Post202 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            header: props.header,
        }
    }
    render(){
        return(
            <div className="Post">
                <div className="post-container">
                    <div className="post-header">
                        <div className="postTime">{this.state.header}</div>
                        <div className="hiddenPostLine">
                            <a href="">Log in</a><span>to see this post's information</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post202;