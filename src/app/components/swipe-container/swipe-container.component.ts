import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-swipe-container',
  templateUrl: './swipe-container.component.html',
  styleUrls: ['./swipe-container.component.scss']
})
export class SwipeContainerComponent implements OnInit, OnDestroy {
  @Input() items: any[];
  movies: any[];
  movieSubscription: any;
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieSubscription = this.movieService.movieList.subscribe((movies) => {
      if (movies) {
        this.movies = movies;
      }
    })
  }
  ngOnDestroy(): void {
    if (this.movieSubscription) {
      this.movieSubscription.unsubscribe();
    }
  }

}
