import React from 'react';

class Comments extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: props.data,
            yourComment: "",
            input: props.shown
        }
        this.addComment = this.addComment.bind(this);
        this.onEnterPress = this.onEnterPress.bind(this);
    }
    onEnterPress(e){
        if(e.keyCode === 13 && e.shiftKey === false) {
            e.preventDefault();
            this.addComment();
        }
    }
    addComment(){
        this.setState(prevState=>{
            let data = prevState.data.slice();
            data.push({
                username: "misha",
                comtext: prevState.yourComment
            })
            return({
                data: data,
                yourComment: ""
            })
        })
    }
    render(){
        if(this.state.input!==0){
            return(
                <div>
                    <div className="comms">
                    {this.state.data.map((el, key)=>(
                        <div key={key}>
                            <strong>{el.username} </strong>
                            <span>{el.comtext}</span>
                        </div>
                    ))}
                    </div>
                    <div className="addComment">
                        <form onSubmit={(e)=>{
                            e.preventDefault();
                            this.addComment();
                        }}>
                            <textarea type="text" placeholder="Type your fun comment here"
                                onChange={(e)=>{
                                    this.setState({
                                        yourComment: e.target.value
                                    })
                                }}
                                value={this.state.yourComment}
                                onKeyDown={this.onEnterPress}
                            />
                            <button type="submit" className="postCommentButton">Post</button>
                        </form>
                    </div>
                </div>
            )
        } else {
            return(
                <div>
                    <div className="comms">
                    {this.state.data.map((el, key)=>(
                        <div key={key}>
                            <strong>{el.username} </strong>
                            <span>{el.comtext}</span>
                        </div>
                    ))}
                    </div>
                    <div className="logTocomment">
                        <a href="">Log in</a> to comment
                    </div>
                </div>
            )
        }
    }
}

export default Comments;