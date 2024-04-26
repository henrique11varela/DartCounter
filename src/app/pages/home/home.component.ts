import { Component } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(public gameService: GameService, private router: Router) { }
  startGame() {
    this.gameService.startGame()
    this.router.navigate(['/counter'])

  }
  continueGame() {
    this.gameService.continueGame()
    this.router.navigate(['/counter'])
  }
}
