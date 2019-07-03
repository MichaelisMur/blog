import React from 'react';
import Picture from './Picture';

class Post201 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            sign: props.sign,
            img: props.img,
            header: props.header,
            hiddenColor: props.hiddenColor,
            hiddenColorOpacity: props.hiddenColorOpacity,
            hiddenText: props.hiddenText,
            hiddenTextColor: props.hiddenTextColor,
            hiddenTextSize: props.hiddenTextSize,
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

export default Post201;