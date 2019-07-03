import React from 'react';
import './style/App.css';
import Main from './Main';
import Poster from './Poster';
import Header from './Header';

class App extends React.Component{
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

export default App;