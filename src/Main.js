import React from 'react';
import Post200 from './Post200';
import Post201 from './Post201';
import Post202 from './Post202';
import Post300 from './Post300';
import Post301 from './Post301';
import Post302 from './Post302';
import Post400 from './Post400';

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                    code: 300,
                    img: "https://imgcomfort.com/Userfiles/Upload/images/illustration-geiranger.jpg",
                    hiddenColor: "red",
                    hiddenColorOpacity: "0.2",
                    hiddenText: "Лучше уж так сдохнуть",
                    hiddenTextSize: "24px",
                    hiddenTextColor: "white",
                    sign: "Ohh shit! A Post!",
                    header: "02.07.2019 23:20",
                    comments: [
                        {
                            username: "username",
                            comtext: "his or her superfunny comment"
                        },
                        {
                            username: "creepyshithead",
                            comtext: "wtf with this comment section"
                        },
                        {
                            username: "michaelis",
                            comtext: "hey now! that's beautiful))))"
                        },
                    ]
                },
                {
                    code: 400,
                    img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/large-cat-breed-1553197454.jpg",
                    hiddenColor: "blue",
                    hiddenColorOpacity: "0.5",
                    hiddenText: "Another day older and deeper in debt",
                    hiddenTextSize: "24px",
                    hiddenTextColor: "white",
                    sign: "Ohh shit! A Post!",
                    header: "02.07.2019 23:20",
                    comments: [
                        {
                            username: "username",
                            comtext: "his or her superfunny comment"
                        },
                        {
                            username: "michaelis",
                            comtext: "hey now! that's beautiful))))"
                        },
                        {
                            username: "creepyshithead",
                            comtext: "wtf with this comment section"
                        },
                    ]
                },
                {
                    code: 301,
                    img: "https://upload.wikimedia.org/wikipedia/commons/6/66/An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg",
                    hiddenColor: "green",
                    hiddenColorOpacity: "0.5",
                    hiddenText: "hidden text",
                    hiddenTextSize: "30px",
                    hiddenTextColor: "black",
                    sign: "Ohh shit! A Post!",
                    header: "02.07.2019 23:20",
                    comments: [
                        {
                            username: "username",
                            comtext: "his or her superfunny comment"
                        },
                        {
                            username: "creepyshithead",
                            comtext: "wtf with this comment section"
                        },
                        {
                            username: "michaelis",
                            comtext: "hey now! that's beautiful))))"
                        },
                    ]
                },
                {
                    code: 302,
                    img: "https://www.animalfriendsrescue.org/available/cat_soba.jpg",
                    hiddenColor: "darkgreen",
                    hiddenColorOpacity: "0.3",
                    hiddenText: "дай мне соль",
                    hiddenTextSize: "20px",
                    hiddenTextColor: "black",
                    sign: "Ohh shit! A Post!",
                    header: "02.07.2019 23:20",
                    comments: [
                        {
                            username: "username",
                            comtext: "his or her superfunny comment"
                        },
                        {
                            username: "michaelis",
                            comtext: "hey now! that's beautiful))))"
                        },
                        {
                            username: "creepyshithead",
                            comtext: "wtf with this comment section"
                        },
                    ]
                }
            ]
        }
    }
    render(){
        return(
            <div className="Main">
                <div className="posts">
                    {this.state.data.map((el, key)=>{

                        if(el.code===200){ //authorized shown everything
                            return(
                                <Post200
                                    key={key}
                                    sign={el.sign}
                                    img={el.img}
                                    comments={el.comments}
                                    header={el.header}
                                    hiddenColor={el.hiddenColor}
                                    hiddenColorOpacity={el.hiddenColorOpacity}
                                    hiddenText={el.hiddenText}
                                    hiddenTextColor={el.hiddenTextColor}
                                    hiddenTextSize={el.hiddenTextSize}
                                />
                            )
                        } else if (el.code===201) { //authorized without comments
                            return (
                                <Post201
                                    key={key}
                                    img={el.img}
                                    sign={el.sign}
                                    header={el.header}
                                    hiddenColor={el.hiddenColor}
                                    hiddenColorOpacity={el.hiddenColorOpacity}
                                    hiddenText={el.hiddenText}
                                    hiddenTextColor={el.hiddenTextColor}
                                    hiddenTextSize={el.hiddenTextSize}
                                />
                            )
                        } else if (el.code===202) { //authorized pic only
                            return (
                                <Post202 
                                    key={key}
                                    img={el.img}
                                    header={el.header}
                                />
                            )
                        } else if (el.code===300) { // unautorized shown everything
                            return (
                                <Post300
                                    key={key}
                                    sign={el.sign}
                                    img={el.img}
                                    comments={el.comments}
                                    header={el.header}
                                    hiddenColor={el.hiddenColor}
                                    hiddenColorOpacity={el.hiddenColorOpacity}
                                    hiddenText={el.hiddenText}
                                    hiddenTextColor={el.hiddenTextColor}
                                    hiddenTextSize={el.hiddenTextSize}
                                />
                            )
                        } else if (el.code===301) { // unautorized without comments
                            return (
                                <Post301
                                    key={key}
                                    sign={el.sign}
                                    img={el.img}
                                    comments={el.comments}
                                    header={el.header}
                                    hiddenColor={el.hiddenColor}
                                    hiddenColorOpacity={el.hiddenColorOpacity}
                                    hiddenText={el.hiddenText}
                                    hiddenTextColor={el.hiddenTextColor}
                                    hiddenTextSize={el.hiddenTextSize}
                                />
                            )
                        } else if (el.code===302) { //authorized pic only
                            return (
                                <Post302 
                                    key={key}
                                    img={el.img}
                                    header={el.header}
                                />
                            )
                        } else if (el.code===400) { //authorized pic only
                            return (
                                <Post400 
                                    key={key}
                                    header={el.header}
                                />
                            )
                        }
                        return (
                            <div></div>
                        )
                        
                    })}
                </div>
                <div className="info">info</div>
            </div>
        )
    }
}

export default Main;