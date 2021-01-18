import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  public movieList = new BehaviorSubject(null);
  constructor() { 
    // temp
    this.movieList.next(['1', '2', '3', '4', '5']);
  }
}
