import React from 'react';
import './style/App.css';
import Main from './Main';
import Poster from './Poster';
import Header from './Header';
import Register from './Register';
import Login from './Login';
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


// const HomePage = (props) => {
//   if(qs.parse(props.location.search, { ignoreQueryPrefix: true }).logout){
//     cookies.remove("username", { path: '/' });
//   }
//   return(
//     <div className="App">
//       <Header />
//       <Poster />
//       <Main/>
//     </div>
//   )
// }
const About = () => {
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
        {/* <Route path="/logout" component={Logout} /> */}
        <Route path="/" component={HomePage} />
      </Switch>
    )
  }
  componentDidMount(){


  }
}

// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {

//     }
//   }
//   render(){
//     return(
      
//     )
//   }
// }

export default App;