import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent {
  @Output() filter = new EventEmitter<string>(); 
  
  sendFilterRequest(id: string) {
    this.filter.emit(id);
  }
}
