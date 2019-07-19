import React from 'react';
import Picture from '../Picture';

class Post202 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            img: props.img,
            header: props.header,
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
                        hiddenColor={"gray"}
                        hiddenColorOpacity={"0.9"}
                        hiddenText={"Sorry, you are not allowed to see this post's information :с"}
                        hiddenTextColor={"lightgray"}
                        hiddenTextSize={"20px"}
                        post_id={this.state.post_id}
                    />
                    <div className="comments">
                        <div className="restrictedComs">
                            <img className="restrictedImg" src="https://images.all-free-download.com/images/graphiclarge/lock_icon_6813906.jpg" alt="restircted" />
                            <div className="restrictedLine">
                                This post's comments section is not availible for you. Sorry ;)
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post202;