import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MovieService } from '../../services/movie.service';
const SWIPE_THRESHOLD = 150;
@Component({
  selector: 'app-swipe-card',
  templateUrl: './swipe-card.component.html',
  styleUrls: ['./swipe-card.component.scss']
})
export class SwipeCardComponent implements OnInit {
  @ViewChild('card') card;
  @Input() data: any;
  @Input() index: number;
  startLeftPosition: number;
  constructor(public movieService: MovieService) { }

  ngOnInit(): void {
  }
  public applyZIndex(): any {
    return {
      "z-index": this.index * -1,
    }
  }
  public onDragEnded(event): void {
    event.source.element.nativeElement.style.transform = 'none';
    const source: any = event.source;
    source._dragRef.reset();
  }
  public handleDragStart(event): void {
    this.startLeftPosition = this._calcXPosition();
  }
  public handleDragDrop(event): void {
    if (this._passedLeftBoundry()) {
      this._triggerLeftSwipe();
    } else if (this._passedRightBoundry()) {
      this._triggerRightSwipe();
    }
  }
  private _passedLeftBoundry(): boolean {
    return this._calcXPosition() < (this.startLeftPosition - SWIPE_THRESHOLD);
  }
  private _passedRightBoundry(): boolean {
    return this._calcXPosition() > (this.startLeftPosition + SWIPE_THRESHOLD);
  }
  private _calcXPosition(): number {
    const rect = this.card.nativeElement.getBoundingClientRect();
    return rect.x;
  }
  private _triggerLeftSwipe(): void {
    console.log("LEFT THRESHOLD DROP TIGGERED");
    this._clearTop();
  }
  private _triggerRightSwipe(): void {
    console.log("RIGHT THRESHOLD DROP TIGGERED");
    this._clearTop();
  }
  private _clearTop(): void {
    this.movieService.clearTopCard();
  }
}
