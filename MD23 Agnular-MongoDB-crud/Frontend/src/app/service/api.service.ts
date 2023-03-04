import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export type Animal = {
  _id: string,
  name: string,
  breed: "dog" | "cat"
}

export type NewAnimalType = {
  name: string,
  breed: "dog" | "cat"
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private _http: HttpClient) { }

  getData() {
    return this._http.get<Animal[]>('http://localhost:3004/all-animals');
  }
  
  deleteAnimal(id: string) {
    return this._http.delete(`http://localhost:3004/delete-animal/${id}`);
  }

  addAnimal(newAnimal: NewAnimalType) {
    return this._http.post(`http://localhost:3004/add-animal`, newAnimal);
  }

  filterAnimals(breed: string) {
    return this._http.get<Animal[]>(`http://localhost:3004/all-animals/${breed}`);
  }
}
