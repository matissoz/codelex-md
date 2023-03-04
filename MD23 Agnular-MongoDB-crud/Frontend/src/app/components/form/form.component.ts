import { NewAnimalType } from './../../service/api.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})


export class FormComponent {
  @Output() add = new EventEmitter<NewAnimalType>(); 

  breeds = ["dog", "cat"]
  animalForm = new FormGroup ({
    name: new FormControl(''),
    breed: new FormControl<"dog" | "cat">('cat'),
  });

  sendAddRequest() {
    let newAnimal: NewAnimalType = {
      name: this.animalForm.value.name!,
      breed: this.animalForm.value.breed!
    };
    
    this.add.emit(newAnimal);

  }

}
