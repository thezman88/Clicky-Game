import React, { Component } from "react";

import Thumbnail from './components/Thumbnail';

class App extends Component {
  state = {
    tiles:[
      'https://image.flaticon.com/icons/png/512/573/premium/573517.png',
      'https://image.flaticon.com/icons/png/512/2367/2367127.png',
      'https://image.flaticon.com/icons/png/512/2367/2367128.png',
      'https://image.flaticon.com/icons/png/512/2367/2367130.png',
      'https://image.flaticon.com/icons/png/512/1031/1031287.png',
      'https://image.flaticon.com/icons/png/512/2397/2397188.png'
    ]
  };

  shuffled = [];
  
  shuffleTiles = () =>{


  }
  handleTileClick = (evt) =>{
    //record click
    //test for match
    console.log(evt);
    const clickedImg =evt.target.src;
    
    const shuffled = this.state.tiles.sort(()=> 0.5 - Math.random());
    this.setState({tiles:shuffled});
    
    // this.state.tiles.sort(()=> 0.5 - Math.random()) });

  }

  render() {
    return (
      <div className="App">
        {this.state.tiles.map((tile, idx) => <Thumbnail 
       src={tile} key={idx} onClick={this.handleTileClick}
       />)}
       
      </div>
    );
  }
}

export default App;
