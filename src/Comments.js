import React from 'react';
import {Link} from 'react-router-dom';
import Cookies from 'universal-cookie';
import Refresh from './Refresh';
import CommentContainer from './CommentContainer';
const cookies = new Cookies();

class Comments extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: props.data,
            yourComment: "",
            input: props.shown,
            post_id: props.post_id,
            opened: props.data.length > 3 ? false : true,
            loadMoreShown: props.data.length > 3 ? true : false
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
        const fun = (refreshFunction) => {
            fetch("http://localhost:3001/comment", {
                method: "POST",
                body: JSON.stringify({
                    username: cookies.get("username"),
                    access_token: cookies.get("access_token"),
                    post_id: this.state.post_id,
                    comtext: this.state.yourComment
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => res.json())
            .then(response => {
                if(!response.error){
                    this.setState({
                        data: response,
                        yourComment: "",
                        opened: true,
                        loadMoreShown: false
                    });
                } else {
                    refreshFunction(fun)
                }
            })
        }
        Refresh(fun);
    }
    render(){
        if(this.state.input!==0){
            return(
                <div>
                    <div className="commentsContainer">
                        <div className="comms">
                            <CommentContainer
                                data={this.state.data}
                                post_id={this.state.post_id}
                                opened={this.state.opened}
                            />
                            <div className="showMore"
                                onClick={()=>{
                                    this.setState({
                                        opened:true,
                                        loadMoreShown: false
                                    })
                                }}
                                style={{display: this.state.loadMoreShown?"block":"none"}}
                            >
                                Show more
                            </div>
                        </div>
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
                    
                    <div className="commentsContainer">
                        <div className="comms">
                        {this.state.data.map((el, key)=>(
                            <div key={key}>
                                <strong>{el.username} </strong>
                                <span style={{whiteSpace: "pre-wrap"}}>{el.comment}</span>
                            </div>
                        ))}
                        </div>
                    </div>
                    <div className="logTocomment">
                        <Link to="/login">Log in</Link> to comment
                    </div>
                </div>
            )
        }
    }
}

export default Comments;