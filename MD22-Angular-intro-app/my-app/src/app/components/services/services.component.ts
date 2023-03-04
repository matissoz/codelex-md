import { Component } from '@angular/core';
import { Service, SERVICES } from './services-data';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

export class ServicesComponent {
  services = SERVICES;
  price: number = 0.00;
  selectedServices: Service[] = [];

  onSelect(service: Service) {
    if(this.checkSelectedValues(service)) {
      this.removeAlreadySelectedValue(service);
    } else {
      this.addNewValue(service);
    }
  }

  checkSelectedValues(service: Service): boolean {
    return this.selectedServices.includes(service);
  }

  removeAlreadySelectedValue(service: Service) {
    this.selectedServices = this.selectedServices.filter(serv => serv != service)
    this.price -= service.price;
  }

  addNewValue(service: Service) {
    this.selectedServices.push(service);
    this.price += service.price;
  }
}
