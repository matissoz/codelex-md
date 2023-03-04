import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Animal } from 'src/app/service/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent {
  @Input() animals: Animal[] = [];
  @Output() delete = new EventEmitter<string>();

  sendDeleteRequest(id: string) {
    this.delete.emit(id);
  }

}
