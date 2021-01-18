import { Component, OnInit, Input, ViewChild } from '@angular/core';
const SWIPE_THRESHOLD = 100;
@Component({
  selector: 'app-swipe-card',
  templateUrl: './swipe-card.component.html',
  styleUrls: ['./swipe-card.component.scss']
})
export class SwipeCardComponent implements OnInit {
  @ViewChild('card') card; 
  @Input() data: any;
  @Input() index: number;
  xPosition: number;
  constructor() { }

  ngOnInit(): void {
  }
  public onDragEnded(event): void {
    event.source.element.nativeElement.style.transform = 'none';
    const source: any = event.source;
    source._dragRef.reset();
  }
  public handleDragStart(event): void {
    this.xPosition = this._calcXPosition();
    console.log(this.xPosition);
  }
  public handleDragDrop(event): void {
    const x = this._calcXPosition();
    // logic to determine left / right past threshold then trigger private swipe functions
  }
  private _calcXPosition(): number {
    const rect = this.card.nativeElement.getBoundingClientRect();
    return rect.x;
  }
  private _triggerLeftSwipe() {

  }
  private _triggerRightSwipe() {
    
  }
}
