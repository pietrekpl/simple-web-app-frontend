import {Component} from '@angular/core';
import {Company} from "../company";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  company: Company = new Company()

  marker = {
    position: {lat: 52.229030, lng: 21.0094739}
  }

  constructor() {
  }

  ngOnInit(): void {
    this.company.companyName = 'LiteHR'
    this.company.companyAddress = 'Warsaw, Aleje Jerozolimskie 69'
    this.company.companyPhone = '666 666 666'
    this.company.companyMail = 'liteHr@gmail.com'
    this.company.imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg/1200px-M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg'
  }

  display: any;
  center: google.maps.LatLngLiteral = {lat: 52.232, lng: 21.006};
  zoom = 15.3;

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null)
      this.center = (event.latLng.toJSON());
  }

  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null)
      this.display = event.latLng.toJSON();
  }
}
