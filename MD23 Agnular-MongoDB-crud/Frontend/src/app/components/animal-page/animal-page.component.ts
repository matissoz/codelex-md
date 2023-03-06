import { Component } from '@angular/core';
import { Animal, ApiService, NewAnimalType } from 'src/app/service/api.service';

@Component({
  selector: 'app-animal-page',
  templateUrl: './animal-page.component.html',
  styleUrls: ['./animal-page.component.scss']
})
export class AnimalPageComponent {
  
  animals:  Animal[] = [];

  constructor(private _api: ApiService) { }

  ngOnInit() {
    this.fetch()
  }

  fetch() {
    this._api.getData().subscribe(res => {
      this.animals = res;
    })
  }

  delete(id: string) {
    this._api.deleteAnimal(id).subscribe(res => {
      this.fetch();
    })
  }

  add(newAnimal: NewAnimalType) {
    this._api.addAnimal(newAnimal).subscribe(res => {
      this.fetch();
    })
  }

  filter(breed: string) {
    this._api.filterAnimals(breed).subscribe(res => {
      console.log(res);
   
      this.animals = res;
    })
  }

  recieveDeleteRequest($event: string){
    this.delete($event)
  }

  recieveAddRequest($event: NewAnimalType){
    this.add($event)
  }

  recieveFilterRequest($event: string){
    if($event == "all"){
      this.fetch();
    }else{
      this.filter($event)
    }
  }
}
