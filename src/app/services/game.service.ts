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
  // public players: Player[] = []
  public selectedPlayer: number = 0
  public activeRound: (0 | 1 | 2) = 0
  public history: { player: number, game: [dart, dart, dart] }[] = []
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

  public pointsOf(pl: number) {
    return this.history.reduce((acc: number, curr: any) => {
      if (curr.player != pl) {
        return acc
      }
      return acc + curr.game.reduce((accumulator: number, currentValue: any) => {
        return accumulator + (currentValue.points * currentValue.multiplier)
      }, 0)
    }, 0)
  }

  public startGame() {
    // this.players = []
    // for (let i = 0; i < this.qtyPlayers; i++) {
    //   this.players.push(new Player())
    // }
    this.history = []
    this.saveGame()
  }

  public continueGame() {
    const tempArray: any[] = JSON.parse(localStorage.getItem(this.lsName) || '[]')
    this.history = tempArray
  }

  public saveGame() {
    localStorage.setItem(this.lsName, JSON.stringify(this.history))
  }

  public submit() {

    //CHECK IF BOOM OR WIN
    const currPoints = this.pointsOf(this.selectedPlayer)
    const nextPoints = this.rounds.reduce((accumulator: number, currentValue: any) => {
      return accumulator + (currentValue.points * currentValue.multiplier)
    }, 0)
    if (currPoints + nextPoints > this.maxPoints) {
      //BOOM
      alert(`YOU FUCKED UP`)
    } else {
      //ELSE
      if (currPoints + nextPoints == this.maxPoints) {
        alert(`PLAYER ${this.selectedPlayer + 1} WON`)
      }
      this.history.push({
        player: this.selectedPlayer,
        game: [{ ...this.rounds[0] }, { ...this.rounds[1] }, { ...this.rounds[2] }]
      })
    }

    do {
      this.selectedPlayer++
      if (this.selectedPlayer >= this.qtyPlayers) {
        this.selectedPlayer = 0
      }
    } while (this.maxPoints == this.pointsOf(this.selectedPlayer));
    this.saveGame()
    this.resetGame()

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
