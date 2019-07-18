import React from 'react';
import Header from './Header';
import Cookies from 'universal-cookie';
import Refresh from './Refresh';
import DND from './DND'
const cookies = new Cookies();

class New extends React.Component{
    constructor(){
        super();
        this.state={
            hiddenText: "",
            authCode: "",
            unauthCode: "",
            img: "",
            hiddenTextSize: "",
            DNDstatus: "nothing there.."
        }
        this.send = this.send.bind(this);
    }
    send(){
        console.log(cookies.get("access_token"));
        const fun = ()=>{
            fetch("http://localhost:3001/new", {
                method: 'POST',
                body: JSON.stringify({
                    img: this.state.img,
                    hiddenTextSize: this.state.hiddenTextSize,
                    hiddenText: `${this.state.hiddenText}`,
                    authCode: this.state.authCode,
                    unauthCode: this.state.unauthCode,
                    access_token: cookies.get("access_token"),
                    username: cookies.get("username"),
                    data: []
                }),
                headers:{
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
            .then(response => {
                console.log(response.result);
            })
            .catch(error => console.error('Error:', error));
        }
        Refresh(fun)
    }
    render(){
        return(
            <div className="shit"
            onDropCapture={(e)=>{
                e.preventDefault();
                // console.log()
                this.setState({
                    DNDstatus: "something there..",
                    data: e.dataTransfer.files[0]
                })
            }}
            onDragOver={(event) => event.preventDefault()}
            >
                <Header
                    line={1}
                />
                <div className="newForm">
                    <form
                        onSubmit={(e)=>{
                            e.preventDefault();
                            this.send();
                        }}
                        encType="multipart/form-data"
                    >
                        <textarea placeholder="hiddenText"
                            onChange={(e)=>{
                                this.setState({
                                    hiddenText: `${e.target.value}`
                                })
                            }}
                            value={this.state.hiddenText}
                        />
                        <input placeholder="img"
                            onChange={(e)=>{
                                this.setState({
                                    img: e.target.value
                                })
                            }}
                            value={this.state.img}
                        />
                        <input placeholder="hiddenTextSize"
                            onChange={(e)=>{
                                this.setState({
                                    hiddenTextSize: e.target.value
                                })
                            }}
                            value={this.state.hiddenTextSize}
                        />
                        <input placeholder="authCode"
                            onChange={(e)=>{
                                this.setState({
                                    authCode: e.target.value
                                })
                            }}
                            value={this.state.authCode}
                        />
                        <input placeholder="unauthCode"
                            onChange={(e)=>{
                                this.setState({
                                    unauthCode: e.target.value
                                })
                            }}
                            value={this.state.unauthCode}
                        />
                        <DND
                            status={this.state.DNDstatus}
                            data={this.state.data}
                        />
                        <input type="submit" />
                    </form>
                </div>
                
            </div>
        )
    }
    componentDidMount(){
    }
}

export default New;