import React from 'react'
import Header from './Header'
import NewsObject from './NewsObject'
import Refresh from './Refresh'
import Cookies from 'universal-cookie'
import {Icon} from 'semantic-ui-react'
const cookies = new Cookies()

export default class News extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading: 1,
            articles: []
        }
        this.fun = this.fun.bind(this)
    }
    fun(){
        const fun = (refreshFunction) => {
            fetch("http://localhost:3001/getnews", {
                method: "POST",
                body: JSON.stringify({
                    username: cookies.get("username"),
                    access_token: cookies.get("access_token")
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res=>res.json())
            .then(response=>{
                if(!response.error){
                    this.setState({
                        loading: 0,
                        articles: response
                    })
                } else if(response.error==="access token expired"){
                    console.log("НА ВЗЛЕТ ЕБАТЬ");
                    refreshFunction(fun)
                } else {
                    //=========FIX THIS
                    cookies.remove("username", { path: '/'});
                    cookies.remove("access_token", { path: '/'});
                    cookies.remove("refresh_token", { path: '/'});
                    cookies.remove("admin", { path: '/'});
                    window.location = "/";
                }
            })
            .catch(error=>{console.log(error)})
        }
        Refresh(fun);
    }
    
    componentWillMount(){
        window.scrollTo(0,0)
        this.fun()
    }
    render(){
        return(
            <div>
                <div className="loadingCurtains"
                    style={{
                        display: this.state.loading ? "flex" : "none"
                    }}
                >
                    <Icon size='large' loading name='spinner' />
                    loading...
                </div>
                <Header 
                    line={1}
                />
                <div className="Poster"
                    style={{
                        zIndex: -1
                    }}
                >
                </div>
                <div className="NewsMain">
                    {this.state.articles.map((el, key)=>{
                        if(el.hidden) return (
                            <div className="newContainer">
                                <div className="new" style={{height: "30px"}}>
                                    <div className="hiddenNewTitle">
                                        This post is hidden
                                    </div>
                                </div>
                            </div>
                        )
                        let em = el.body.length>200?"...":" "
                        return(
                        <NewsObject
                            title={el.title}
                            body={el.body.substring(0, 100) + em}
                            link={el.link}
                            key={key}
                        />
                    )})}
                </div>
            </div>
        )
    }
    parallax(e){
        document.querySelector(".Poster").style.top = window.pageYOffset*0.4 + "px";
    }
    componentDidMount(){
        this.parallax()
        window.addEventListener("scroll", this.parallax)
    }
    componentWillUnmount(){
        window.removeEventListener("scroll", this.parallax)
    }
}