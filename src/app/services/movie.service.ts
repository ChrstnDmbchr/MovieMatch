import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  public movieList = new BehaviorSubject(null);
  constructor() { 
    this.movieList.next(['1', '2', '3', '4', '5']);
  }
  public clearTopMovie(): void {
    this.movieList.next(this.movieList.value.slice(1));
  }
}
