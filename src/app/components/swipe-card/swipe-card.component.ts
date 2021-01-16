import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-swipe-card',
  templateUrl: './swipe-card.component.html',
  styleUrls: ['./swipe-card.component.scss']
})
export class SwipeCardComponent implements OnInit {
  @ViewChild('card') card; 
  @Input() data: any;
  @Input() index: number;
  constructor() { }

  ngOnInit(): void {
  }

  onDragEnded(event): void {
    event.source.element.nativeElement.style.transform = 'none';
    const source: any = event.source;
    source._dragRef.reset();
  }
}
