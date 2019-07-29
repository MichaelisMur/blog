import React from 'react'
import Post200 from './Posts/Post200'
import Post201 from './Posts/Post201'
import Post202 from './Posts/Post202'
import Post300 from './Posts/Post300'
import Post301 from './Posts/Post301'
import Post302 from './Posts/Post302'
import Post203 from './Posts/Post203'
import Post303 from './Posts/Post303'
import Refresh from './Refresh'
import Cookies from 'universal-cookie'
import {Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
// import Poster from './Poster'
const cookies = new Cookies()

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: [

            ],
            index: 0,
            toShow: 2,
            endOfThePage: 0,
            fetching: 0,
            loading: true
        }
        this.fun = this.fun.bind(this);
        this.loadMore = this.loadMore.bind(this);
    }
    render(){
        return(
            <div className="MainContainer">
                <div className="Poster">

                </div>
                <div className="Main">
                    <div className="posts">
                        <div className="loading"
                                style={{display: this.state.loading?"flex":"none"}}
                            >
                            <div className="loadingIcon">
                            </div>
                        </div>
                        {this.state.data.map((el, key)=>{
                            if(el.code===200){ //authorized shown everything
                                return(
                                    <Post200
                                        key={key}
                                        post_id={el.id}
                                        img={el.img}
                                        comments={el.comments}
                                        header={el.header}
                                        hiddenColor={el.hiddenColor}
                                        hiddenColorOpacity={el.hiddenColorOpacity}
                                        hiddenText={el.hiddenText}
                                        hiddenTextColor={el.hiddenTextColor}
                                        hiddenTextSize={el.hiddenTextSize}
                                        audio={el.audio}
                                    />
                                )
                            } else if (el.code===201) { //authorized without comments
                                return (
                                    <Post201
                                        key={key}
                                        post_id={el.id}
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
                                        post_id={el.id}
                                        img={el.img}
                                        header={el.header}
                                    />
                                )
                            } else if (el.code===300) { // unautorized shown everything
                                return (
                                    <Post300
                                        key={key}
                                        post_id={el.id}
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
                                        post_id={el.id}
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
                                        post_id={el.id}
                                        img={el.img}
                                        header={el.header}
                                    />
                                )
                            } else if (el.code===303) { //unauthorized nothing
                                return (
                                    <Post303
                                        key={key}
                                        post_id={el.id}
                                        header={el.header}
                                    />
                                )
                            } else if (el.code===203) { //unauthorized nothing
                                return (
                                    <Post203
                                        key={key}
                                        post_id={el.id}
                                        header={el.header}
                                    />
                                )
                            }
                            return (
                                <div></div>
                            )
                            
                        })}
                        <div className="fetching"
                            style={{visibility: this.state.fetching ? "visible" : "hidden"}}
                        >
                            <Icon size='big' loading name='spinner' />
                        </div>
                    </div>
                    <div className="info">
                        <div className="important">
                            <div className="importantShadow">
                                <div className="importantContainer">
                                    <div className="importantLinkTitle">Last news</div>
                                    <Link to="/stat"><div className="importantLink">party 12.08.2019 !you're invited!</div></Link>
                                    <Link to="/stat"><div className="importantLink">my music broadcast demo</div></Link>
                                    <Link to="/stat"><div className="importantLink">Данил, верни сотку</div></Link>
                                    <Link to="/stat"><div className="importantLink" style={{
                                        textDecoration: "underline",
                                        color: "pink"
                                    }}>Show all...</div></Link>
                                    {/* <div className="importantLinkTitle">Send me nudes:</div>
                                    <Form>
                                        <TextArea placeholder='Tell us more' style={{ minHeight: 10 }} />
                                    </Form> */}
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div> 
        )
    }
    fun(){
        const fun = (refreshFunction) => {
            if(this.state.endOfThePage || this.state.fetching) return
            this.setState({fetching: 1});
            console.log("fetching");
            fetch("http://localhost:3001/get", {
                method: "POST",
                body: JSON.stringify({
                    username: cookies.get("username"),
                    access_token: cookies.get("access_token"),
                    index: this.state.index,
                    toShow: this.state.toShow
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res=>res.json())
            .then(response=>{
                if(!response.error){
                    this.setState(prevState=>{
                        if(prevState.loading){
                            window.scrollTo(0,0)
                        }
                        if(!response.length){
                            return({
                                endOfThePage: 1,
                                fetching: 0,
                                loading: false
                            })
                        }
                        let temp = [...prevState.data, ...response];
                        return({
                            index: prevState.index + prevState.toShow,
                            data: temp,
                            fetching: 0,
                            loading: false
                        })
                    })
                    
                    if((window.pageYOffset + window.innerHeight) === document.body.scrollHeight){
                        this.fun()
                    }
                } else {
                    console.log("НА ВЗЛЕТ ЕБАТЬ");
                    this.setState({fetching: 0})
                    refreshFunction(fun)
                }
            })
            .catch(error=>{console.log(error)})
        }
        Refresh(fun);
    }
    loadMore(){
        if(document.body.scrollHeight - (window.pageYOffset + window.innerHeight) < 300){
            this.fun();
        }
    }
    // parallax(){
    //     document.querySelector(".Poster").style.top = window.pageYOffset*0.2 + "px"
    // }
    componentDidMount(){
        window.addEventListener("scroll", this.loadMore);
        // window.addEventListener("scroll", this.parallax);
        this.fun()
    }
    componentWillUnmount(){
        window.removeEventListener("scroll", this.loadMore)
        // window.removeEventListener("scroll", this.parallax)
    }
}

export default Main;