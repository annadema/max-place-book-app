import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Isola dei Gabbiani',
      'Il paradiso del Windsurf',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdF6urUTE08Tmajnqd6OChbdHDWV2idY7zLRVRqaqhk2CoXdGp',
      50
    ),
    new Place(
      'p2',
      'Karphatos',
      'La fabbrica del vento',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp_tWKVp_CwXJ1OivGyaTZuRCK0HYXYgk5mQ&usqp=CAU',
      99
    ),
    new Place(
      'p3',
      'Fuerteventura',
      'Il nome è una garanzia',
      'https://cdn.getyourguide.com/img/location/b4d0d50068ba1e90.jpeg/99.jpg',
      75
    ),
  ];

  get places() {
    return [...this._places];
  }

  constructor() {}
}
