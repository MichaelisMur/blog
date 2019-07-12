import React from 'react';
import Post200 from './Posts/Post200';
import Post201 from './Posts/Post201';
import Post202 from './Posts/Post202';
import Post300 from './Posts/Post300';
import Post301 from './Posts/Post301';
import Post302 from './Posts/Post302';
import Post203 from './Posts/Post203';
import Post303 from './Posts/Post303';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: [

            ]
        }
        this.get = this.get.bind(this);
    }
    get(uri, body, somefunction){
        const fun = (refreshFunction) => {
            let access_token = cookies.get("access_token");
            let refresh_token = cookies.get("refresh_token");
            let temp = JSON.parse(body);
            let newBody = {};
            for(var i in temp){
                newBody[i] = temp[i];
            }
            newBody.refresh_token = refresh_token;
            newBody.access_token = access_token;
            fetch(uri, {
                method: "POST",
                body: JSON.stringify(newBody),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res=>res.json())
            .then(
                (response)=>{
                //====response=function====
                console.log(response);
                if(!response.error){
                    console.log("nicely done");
                    this.setState({
                        data: response
                    })
                } else {
                    console.log("НА ВЗЛЕТ ЕБАТЬ");
                    console.log(this.refreshFunction);
                    refreshFunction(fun)
                }
                //=========================
            })
            .catch(error=>{console.log(error)})
        }
        const refresh = (again) => {
            fetch("http://localhost:3001/refreshtoken", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: cookies.get("username"),
                    access_token: cookies.get("access_token"),
                    refresh_token: cookies.get("refresh_token")
                })
            }).then(res=>res.json())
            .then(response=>{
                console.log(`new access_token: ${response.access_token}`);
                console.log(`new refresh_token: ${response.refresh_token}`);
                cookies.set("access_token", response.access_token, {path: "/"});
                cookies.set("refresh_token", response.refresh_token, {path: "/"});
                again(uri, JSON.stringify({
                    username: cookies.get("username"),
                    access_token: cookies.get("access_token")
                }))
            })
        }
        fun(refresh)
    }
    componentWillMount(){
        let body = JSON.stringify({
            username: cookies.get("username")
        })
        this.get("http://localhost:3001/get", body);
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
                        } else if (el.code===302) { //unauthorized pic only
                            return (
                                <Post302 
                                    key={key}
                                    img={el.img}
                                    header={el.header}
                                />
                            )
                        } else if (el.code===303) { //unauthorized nothing
                            return (
                                <Post303
                                    key={key}
                                    header={el.header}
                                />
                            )
                        } else if (el.code===203) { //unauthorized nothing
                            return (
                                <Post203
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