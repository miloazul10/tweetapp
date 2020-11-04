import React from 'react';
import './App.css';
import './styles.css';

import Navbar from './components/navbar';
import Feed from './components/feed';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      profile: "https://hipertextual.com/files/2012/06/twitter-bird-white-on-blue.jpg",
      profileName: "Twitter Safety",
      username: "@TwitterSafety",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus et enim so" +
      "dales congue sed ac ante. Maecenas tincidunt tortor vel lorem semper vestibulum." +
      " Phasellus placerat arcu ac dui ultricies, sed tempor dolor rhoncus. Cras id leo" +
      " sem.",
      display: false
    }
  }

  mostrar = () => {
    if(this.state.display){
      this.setState({display: false});
    }else{
      this.setState({display: true});
    }
  }

  ocultar = () => {
    this.setState({display: false});
  }

  render(){
    return (
      <div className="App">
        <Navbar />
        <h1>Hello world</h1>
        <h2>Probando el hot reload 🍿</h2>
        <Feed datos={this.state} mostrar={this.mostrar} ocultar={this.ocultar} />
      </div>
    );
  }
}

export default App;
