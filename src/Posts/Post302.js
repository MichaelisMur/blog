import React from 'react';
import Picture from '../Picture';

const Post302 = (props) => {
    return(
        <div className="Post">
            <div className="post-container">
                <div className="post-header">
                    <div className="postTime">{props.header}</div>
                    <div className="postSettings">
                        <a href={`http://localhost:3001/public/source/${props.post_id}_${props.img}.jpg`} target="blank">Full size</a>
                    </div>
                </div>
                <Picture
                    img={props.img}
                    hiddenColor={"gray"}
                    hiddenColorOpacity={"0.9"}
                    hiddenText={"You have to authorize to see this post's information"}
                    hiddenTextColor={"lightgray"}
                    hiddenTextSize={"20px"}
                    post_id={props.post_id}
                />
                <div className="comments">
                    <div className="logTocomment">
                        <a href="/login">Log in</a> to see this post's comments
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post302;