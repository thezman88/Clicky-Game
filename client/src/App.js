import React, { Component } from "react";

import Thumbnail from './components/Thumbnail';
import Score from './components/score'

class App extends Component {
  state = {
    tiles:[
      '/img/2397188.png',
      '/img/1236363.png',
      'https://image.flaticon.com/icons/png/512/573/premium/573517.png',
      'https://image.flaticon.com/icons/png/512/2367/2367127.png',
      'https://image.flaticon.com/icons/png/512/2367/2367128.png',
      'https://image.flaticon.com/icons/png/512/2367/2367130.png',
      'https://image.flaticon.com/icons/png/512/1031/1031287.png',
      // 'https://image.flaticon.com/icons/png/512/2397/2397188.png',
      // 'https://image.flaticon.com/icons/png/512/1236/1236363.png',
      'https://image.flaticon.com/icons/png/512/218/218153.png',
      'https://image.flaticon.com/icons/png/512/218/218151.png',


    ],
    score: 0,
    topScore:0
  };

  shuffled = [];

  shuffleTiles = () =>{


  }

  clickedTiles =[

  ];

  handleTileClick = (evt) =>{

    const clickedTile =evt.target.src;

    if(this.clickedTiles.includes(clickedTile)){
      this.clickedTiles.length = 0;
      this.setState({score:0});
      return;
    }

    // this.setState({score:this.state.score +1});
    const newScore =this.state.score +1;
    const topScore = newScore > this.state.topScore ?
    newScore:
    this.state.topScore;

    // this.state.score:
    // this.state.topscore
    // this.setState({topScore})

    this.clickedTiles.push(clickedTile);
    // console.log('score: ', this.state.score);





    const shuffled = this.state.tiles.sort(()=> 0.5 - Math.random
    ());
    this.setState({tiles:shuffled,
    score: newScore,
    topScore: topScore

});

    // this.state.tiles.sort(()=> 0.5 - Math.random()) });

  }

  render() {
    return (
      <div className="App">
        <Score score={this.state.score} topScore ={0}/>
        {this.state.tiles.map((tile, idx) => <Thumbnail
       src={tile} key={idx} onClick={this.handleTileClick}
       />)}

      </div>
    );
  }
}

export default App;
