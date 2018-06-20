import { Injectable } from '@angular/core';
import { Place } from './place';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  places: Place[] = [
    {
      id: 1,
      city:"Dubai",
      country: "United Arab Emirates", 
      attraction: "Burj-Khalifa", 
      desire_date: new Date('10-10-2020'), 
      travel_alone: false,
      imgURL: 'assets/images/BK.png'
    },
    {
      id: 2,
      city:"Alps",
      country: "Switzerland", 
      attraction: "Swiss Alps", 
      desire_date: new Date('09-01-2018'), 
      travel_alone: true,
      imgURL: 'assets/images/SA.png'
    },
    {
      id: 3,
      city:"Sydney",
      country: "Australia", 
      attraction: "Opera House", 
      desire_date: new Date('01-01-2019'), 
      travel_alone: false,
      imgURL: 'assets/images/AO.png'
    },
    {
      id: 4,
      city:"Paris",
      country: "France", 
      attraction: "Effiel Tower", 
      desire_date: new Date('02-10-2019'), 
      travel_alone: false,
      imgURL: 'assets/images/PF.png'
    }
  ]

  getPlaces():Observable<Place[]>{
    return of(this.places);
  }
  
  constructor() { }
}
