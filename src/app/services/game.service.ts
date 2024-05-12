import { Injectable } from '@angular/core';
import { Player } from '../model/player';

type dart = {
  points: number,
  multiplier: number,
}

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private lsName = 'dartGame'

  public maxPoints: number = 101;
  public qtyPlayers: number = 2;
  public players: Player[] = []
  public activeRound: (0 | 1 | 2) = 0
  public rounds: [dart, dart, dart] = [
    {
      points: 0,
      multiplier: 1
    },
    {
      points: 0,
      multiplier: 1
    },
    {
      points: 0,
      multiplier: 1
    }
  ]

  constructor() {
    this.continueGame()
  }

  public startGame() {
    this.players = []
    for (let i = 0; i < this.qtyPlayers; i++) {
      this.players.push(new Player())
    }
    this.saveGame()
  }

  public continueGame() {
    const tempArray: any[] = JSON.parse(localStorage.getItem(this.lsName) || '[]')
    this.players = tempArray.map((item) => new Player(item.points))
  }

  public saveGame() {
    localStorage.setItem(this.lsName, JSON.stringify(this.players))
  }

  public resetGame() {
    this.activeRound = 0
    this.rounds = [
      {
        points: 0,
        multiplier: 1
      },
      {
        points: 0,
        multiplier: 1
      },
      {
        points: 0,
        multiplier: 1
      }
    ]
  }

}
