import { Component } from '@angular/core';
import { Player } from 'src/app/model/player';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  public selectedPlayer: Player = this.gameService.players[0]
  public pointOptions: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 50, 0]
  public selectedPoints: number = 1
  public colors: string[] = ['#f52e2e', '#5463ff', '#ffc717', '#1f9e40']

  constructor(public gameService: GameService) { }

  selectRound(index: number) {
    this.gameService.activeRound = index as (0 | 1 | 2)
  }

  selectPlayer(index: number) {
    this.selectedPlayer = this.gameService.players[index]
  }

  submit() {
    const points = this.gameService.rounds.reduce((accumulator: number, currentValue: any) => {
      return accumulator + (currentValue.points * currentValue.multiplier)
    }, 0)
    this.selectedPlayer.addPoints(points)
    this.gameService.saveGame()
    this.gameService.resetGame()
  }

  reset() {
    this.gameService.resetGame()
  }
}
