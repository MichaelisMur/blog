import React from 'react'
import Header from './Header'
import Refresh from './Refresh'
import Cookies from 'universal-cookie'
import {Link} from 'react-router-dom'
import {Icon} from 'semantic-ui-react'
const cookies = new Cookies()

export default class Stat extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title: "",
            body: "",
            loading: 1
        }
    }
    componentWillMount(){
        const fun = (refreshFunction) => {
            fetch("http://localhost:3001/getarticle", {
                method: "POST",
                body: JSON.stringify({
                    username: cookies.get("username"),
                    access_token: cookies.get("access_token"),
                    link: this.props.match.params.link
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res=>res.json())
            .then(response=>{
                if(!response.error){
                    this.setState({
                        title: response.title,
                        body: response.body,
                        loading: 0
                    })
                } else if(response.error==="access token expired"){
                    console.log("НА ВЗЛЕТ ЕБАТЬ");
                    this.setState({fetching: 0})
                    refreshFunction(fun)
                } else if(response.error==="no vip"){
                    window.location = "/news"
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
    render(){
        return(
            <div>
                <Header 
                    line={1}
                />
                <div className="loadingCurtains"
                    style={{
                        display: this.state.loading ? "flex" : "none"
                    }}
                >
                    
                    <Icon size='large' loading name='spinner' />
                    loading...
                </div>
                <div className="Poster"
                    style={{
                        zIndex: -1
                    }}
                >
                </div>
                <div className="NewsBlockPage">
                    <h1>{this.state.title}</h1>
                    <h3>{this.state.body}</h3>
                    <Link to="/news"><div>Shit go back</div></Link>
                </div>
            </div>
        )
    }
    // parallax(e){
    //     // console.log(window.pageYOffset);
    //     document.querySelector(".Poster").style.top = window.pageYOffset*0.4 + "px";
    // }
    // componentDidMount(){
    //     this.parallax()
    //     window.addEventListener("scroll", this.parallax)
    // }
}
