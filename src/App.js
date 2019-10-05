import React from 'react'
import './style/App.css'
import Main from './Main'
import Header from './Header'
import Register from './Register'
import Login from './Login'
import New from './New'
import Get from './Get'
import Request from './Request'
import Stat from './Stat'
import Webm from './Webm'
import Audio from './Audio'
import Edit from './Edit'
import News from './News'
import NewsPage from './NewsPage'
import Secret from './Secret'
import AddNews from './AddNews'
import EditNewsPage from './EditNews'
import {Switch, Route} from 'react-router-dom'

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
          <Route path="/stat" component={Stat} />
          <Route path="/Webm" component={Webm} />
          <Route path="/audio" component={Audio} />
          <Route path="/edit/:id" component={Edit} />
          <Route path="/news/:link" component={NewsPage} />
          <Route path="/editnews/:link" component={EditNewsPage} />
          <Route path="/news" component={News} />
          <Route path="/addnews" component={AddNews} />
          <Route path="/secret" component={Secret} />
          <Route path="/" component={HomePage} />
          <Route component={Secret} />
        </Switch>
    )
  }
  componentDidMount(){


  }
}

export default App;