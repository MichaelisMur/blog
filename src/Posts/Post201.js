import React from 'react'
import Picture from '../Picture'
import Audio from '../Audio'

const Post201 = (props) => {
    return(
        <div className="Post">
            <div className="post-container">
                <div className="post-header">
                    <div className="postTime">{props.header}</div>
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

export default Post201;