

import React, { Component} from 'react';
import './App.css';





class App extends Component {
 

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

    prueba () {

      this.setState({
        count: this.state.count + 1,
        
      });
    };
    
  
  
 
  render() {
   
   
   
   return (
      <div>
        <span className="value">{this.state.count}</span>
        <button id="inc" onClick={(e) => this.prueba(e)}>Incrementa</button>
      </div>
    );
  }
}

 

export default App;