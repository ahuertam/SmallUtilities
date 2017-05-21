import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iniciative',
   templateUrl: './app-iniciative.html',
  styles: []
})
export class IniciativeComponent implements OnInit {
  players: any [];
  orderedPlayers: any [];
    constructor() {
    }
  ngOnInit() {
    this.players = [];
    this.orderedPlayers = [];
  }
  addPc(value) {
    this.players.push({name: value , rolled: 0});
  }

  rollDice(diceNumber, sides) {
  let out = '';
  for (let i = 0; i < diceNumber; i++) {
    out += (Math.floor(Math.random() * sides) + 1) + ' | ';
  }
  return out;
}
  roll(player) {
    // First we get the index of the player clicked
    const index = this.players.findIndex(x => x.name === player.name);
    // Then we roll the dice then we asign the result to the player
    this.players[index].rolled = this.rollDice(1, 100);
    // Then we  can sort the list
    this.orderedPlayers = JSON.parse(JSON.stringify(this.players));
    this.orderedPlayers.sort(function(a, b) {
    return parseFloat(a.rolled) - parseFloat(b.rolled);
      });
  }

remove(player) {
  this.players = this.players.filter(function (el) {
    return el.name !== player.name;
  });

  this.orderedPlayers = JSON.parse(JSON.stringify(this.players));

}

}
