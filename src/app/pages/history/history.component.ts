import { Component, ElementRef, ViewChild } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  public selectedHistory: number = -1
  @ViewChild('opts') dialog!: ElementRef<HTMLDialogElement>

  constructor(public gameService: GameService) { }

  openDialog() {
    this.dialog.nativeElement.open = true
  }

  closeDialog() {
    this.dialog.nativeElement.open = false
  }

  selectH(index: number) {
    this.openDialog()
    this.selectedHistory = index
  }

  deleteTurn(){
    this.gameService.deleteHistoryAt(this.selectedHistory)
    this.closeDialog()
  }
}
