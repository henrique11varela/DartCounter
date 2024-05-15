import { Component } from '@angular/core';
import { Player } from 'src/app/model/player';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  // public selectedPlayer: Player = this.gameService.players[0]
  public pointOptions: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 50, 0]
  public selectedPoints: number = 1
  

  constructor(public gameService: GameService) { }

  selectRound(index: number) {
    this.gameService.activeRound = index as (0 | 1 | 2)
  }

  selectPlayer(index: number) {
    // this.selectedPlayer = this.gameService.players[index]
    this.gameService.selectedPlayer = index
  }

  submit() {
    this.gameService.submit()
  }

  reset() {
    this.gameService.resetGame()
  }

  history(){
    console.log(this.gameService.history);
    
  }
}
