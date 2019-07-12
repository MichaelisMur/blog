import React from 'react';
import Picture from '../Picture';
import Comments from '../Comments';

class Post300 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            img: props.img,
            comments: props.comments,
            header: props.header,
            yourComment: "",
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
                        <Comments data={this.state.comments} shown={0} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Post300;