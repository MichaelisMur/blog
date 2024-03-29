import React from 'react';
// import LazyLoad from 'react-lazy-load';

class Picture extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            img: props.img,
            hiddenColor: props.hiddenColor,
            hiddenColorOpacity: props.hiddenColorOpacity,
            hiddenText: props.hiddenText,
            hiddenTextSize: props.hiddenTextSize,
            hiddenTextColor: props.hiddenTextColor,
            opacity: 0,
            signOpacity: 0,
            signOffTop: "80%",
            post_id: props.post_id
        }
    }
    componentWillReceiveProps(props){
        this.setState({
            img: props.img,
            hiddenColor: props.hiddenColor,
            hiddenColorOpacity: props.hiddenColorOpacity,
            hiddenText: props.hiddenText,
            hiddenTextSize: props.hiddenTextSize,
            hiddenTextColor: props.hiddenTextColor,
        })
    }
    render(){
        return(
            <div className="Picture"
                // HOVER EFFECT
                onMouseOver={()=>{
                    this.setState({
                        opacity: this.state.hiddenColorOpacity,
                        signOpacity: 1,
                        signOffTop: "100%"
                    })
                }}
                onMouseOut={()=>{
                    this.setState({
                        opacity: 0,
                        signOpacity: 0,
                        signOffTop: "80%"
                    })
                }}
                // -------------
            >
                {/* <LazyLoad offsetVertical={0}> */}
                    <img src={`http://localhost:3001/public/min/${this.state.post_id}_${this.state.img}.jpg`} alt=""></img>
                {/* </LazyLoad> */}
                {/* HOVER EFFECT */}
                <div className="pictureScript">
                    <div className="hiddenText"
                        style={{
                            opacity: this.state.signOpacity,
                            height: this.state.signOffTop,
                            color: this.state.hiddenTextColor,
                            fontSize: `${this.state.hiddenTextSize}px`
                        }}
                    >

                        {/* HIDDEN SIGN GOES HERE */}
                        <div className="hiddenTextSign">
                            {this.state.hiddenText}
                        </div> 

                    </div>
                    <div className="curtain"
                        style={{
                        background: this.state.hiddenColor,
                        opacity: this.state.opacity
                        }}
                    >
                    </div>
                </div>
                {/* ---------------- */}
            </div>
        )
    }
    
}

export default Picture;