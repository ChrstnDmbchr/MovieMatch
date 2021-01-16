import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-swipe-card',
  templateUrl: './swipe-card.component.html',
  styleUrls: ['./swipe-card.component.scss']
})
export class SwipeCardComponent implements OnInit {
  @Input() data: any;
  @Input() index: number;
  constructor() { }

  ngOnInit(): void {
  }

  calcZIndex(): any {
    return { "z-index": this.index * - 1 }
  }
}
