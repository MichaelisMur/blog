import React from 'react';
import './style/App.css';
import Main from './Main';
import Poster from './Poster';
import Header from './Header';
import Register from './Register';
import Login from './Login';
import New from './New';
import Get from './Get';
import Request from './Request';
import Stat from './Stat';
import {Switch, Route} from 'react-router-dom';
// import qs from 'query-string';
// import Cookies from 'universal-cookie';
// const cookies = new Cookies();


class HomePage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }
  render(){
    return(
      <div className="App">
      <Header />
      <Poster />
      <Main/>
    </div>
    )
  }
}



const About = () => {
  console.log("emm");
  return(
    <div className="shit">
      <Header />
    </div>
  )
}


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: "oooh.. fuck.."
    }
  }
  render(){
    return(
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/new" component={New} />
        <Route path="/get" component={Get} />
        <Route path="/request" component={Request} />
        <Route path="/Stat" component={Stat} />
        <Route path="/" component={HomePage} />
      </Switch>
    )
  }
  componentDidMount(){


  }
}

export default App;