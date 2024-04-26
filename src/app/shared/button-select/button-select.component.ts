import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-select',
  templateUrl: './button-select.component.html',
  styleUrls: ['./button-select.component.scss']
})
export class ButtonSelectComponent {

  @Input() options: any[] = [];

  @Input() value: any = null;
  @Output('valueChange') emiter: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  selectValue(value: any) {
    this.value = value
    this.emiter.emit(this.value)
  }
}
