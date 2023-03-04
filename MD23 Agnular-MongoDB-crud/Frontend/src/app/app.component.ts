import { Animal, NewAnimalType, ApiService } from './service/api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'Frontend';
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
