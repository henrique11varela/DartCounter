import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-point-buttons',
  templateUrl: './point-buttons.component.html',
  styleUrls: ['./point-buttons.component.scss']
})
export class PointButtonsComponent {
  @Input() public points: number = 0;
  @Input() public multipliers: number[] = [];
  @ViewChild('dialog') dialog!: ElementRef<HTMLDialogElement>;
  private timer: any;
  constructor(private gameService: GameService) { }

  onDown(event: Event) {
    this.timer = setTimeout(() => {
      this.openDialog(event)
    }, 1000)
  }

  onUp(event: Event) {
    clearTimeout(this.timer)
  }

  openDialog(event: Event) {
    if (this.multipliers.length > 0) {
      this.dialog.nativeElement.open = true
    }
    else {
      this.add(1)
    }
    return false;
  }

  closeDialog(event: Event) {
    this.dialog.nativeElement.open = false
  }

  select(event: Event, multiplier: number = 1) {
    this.closeDialog(event)
    this.add(multiplier)
  }

  add(multiplier: number) {
    this.gameService.rounds[this.gameService.activeRound] = {
      points: this.points,
      multiplier: multiplier,
    }
    if (this.gameService.activeRound < 2) {
      this.gameService.activeRound++
    }
  }

  returnFalse(){
    return false
  }
}
