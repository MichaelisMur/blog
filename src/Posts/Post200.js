import React from 'react';
import Picture from '../Picture';
import Comments from '../Comments';


const Post200 = (props) => {
    console.log("somthing.. upd")
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

// class Post200 extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             img: props.img,
//             comments: props.comments,
//             header: props.header,
//             yourComment: "",
//             hiddenColor: props.hiddenColor,
//             hiddenColorOpacity: props.hiddenColorOpacity,
//             hiddenText: props.hiddenText,
//             hiddenTextColor: props.hiddenTextColor,
//             hiddenTextSize: props.hiddenTextSize,
//             post_id: props.post_id
//         }
//     }
//     render(){
//         return(
//             <div className="Post">
//                 <div className="post-container">
//                     <div className="post-header">
//                         <div className="postTime">{this.state.header}</div>
//                     </div>
//                     <Picture
//                         img={this.state.img}
//                         hiddenColor={this.state.hiddenColor}
//                         hiddenColorOpacity={this.state.hiddenColorOpacity}
//                         hiddenText={this.state.hiddenText}
//                         hiddenTextColor={this.state.hiddenTextColor}
//                         hiddenTextSize={this.state.hiddenTextSize}
//                         post_id={this.state.post_id}
//                     />
//                     <div className="comments">
//                         <Comments
//                             data={this.state.comments}
//                             post_id={this.state.post_id}
//                         />
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

export default Post200;