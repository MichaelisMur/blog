import React from 'react'
import Picture from '../Picture'
import Comments from '../Comments'
import Audio from '../Audio'
import VipInfo from '../VipInfo'
import PostSettings from '../PostSettings'


const Post200 = (props) => {
    if(!props.img){
        return(<div></div>)
    } else
    {
        return(
            <div className="Post">
                    <div className="post-container">
                        <div className="post-header">
                            <div className="postTime">{props.header}</div>
                            <div className="postSettings">
                                <PostSettings id={props.post_id} />
                                <VipInfo code={props.vip ? props.authCode : undefined} />
                                <a href={`http://localhost:3001/public/source/${props.post_id}_${props.img}.jpg`} target="blank"
                                    onClick={()=>{
                                        fetch("http://localhost:3001/fullsized", {
                                            method: "POST",
                                            body: JSON.stringify({
                                                post: `http://localhost:3001/public/source/${props.post_id}_${props.img}.jpg`,
                                            }),
                                            headers: {
                                                "Content-Type": "application/json"
                                            }
                                        })
                                    }}
                                >
                                    Full size
                                </a>
                            </div>
                        </div>
                        <Picture
                            img={props.img}
                            hiddenColor={props.hiddenColor}
                            hiddenColorOpacity={props.hiddenColorOpacity}
                            hiddenText={props.hiddenText}
                            hiddenTextColor={props.hiddenTextColor}
                            hiddenTextSize={props.hiddenTextSize}
                            post_id={props.post_id}
                        />
                        <Audio name={props.audio}
                            musicCB={props.musicCB}
                            playing={props.playing}
                        />
                        <div className="comments">
                            <Comments
                                data={props.comments}
                                post_id={props.post_id}
                            />
                        </div>
                    </div>
                </div>
        )
    }
}

export default Post200;