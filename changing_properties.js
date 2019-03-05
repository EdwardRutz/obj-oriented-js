//Example of changing object properties

const player1 = {
  name: 'Ashley',
  color: 'purple',
  isTurn: true,
  play: function(){
    if (this.isTurn) {
      console.log(`${this.name} is now playing!`);
    }
  }
};

const player2 = {
  name: 'Guil',
  color: 'red',
  isTurn: false,
  play: function(){
    if (this['isTurn']) {
      console.log(`${this['name']} is now playing!`);
    }
  }
};

//Change properties of player1, player2
player1.isTurn = false;
player2['isTurn'] = true;
