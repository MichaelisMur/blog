import React from 'react';
import Picture from '../Picture';

const Post202 = (props) => {
    return(
        <div className="Post">
            <div className="post-container">
                <div className="post-header">
                    <div className="postTime">{props.header}</div>
                </div>
                <Picture
                    img={props.img}
                    hiddenColor={"gray"}
                    hiddenColorOpacity={"0.9"}
                    hiddenText={"Sorry, you are not allowed to see this post's information :с"}
                    hiddenTextColor={"lightgray"}
                    hiddenTextSize={"20px"}
                    post_id={props.post_id}
                />
                <div className="comments">
                    <div className="restrictedComs">
                        <img className="restrictedImg" src="http://localhost:3001/public/lock.png" alt="restircted" />
                        <div className="restrictedLine">
                            This post's comment section is not availible for you. Sorry ;)
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post202;