import React, { Component } from 'react'
import './App.css'
import Map from './Map.js'



class App extends Component {

  render() {
    return (
      <div>
        <header role="banner" className='header'>Your Ultimate Guide to Moscow</header>
        <main role="main">
          <Map tabIndex="-1"/>
        </main>
      </div>
    );
  }
}

export default App;
