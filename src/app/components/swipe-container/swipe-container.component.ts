import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-swipe-container',
  templateUrl: './swipe-container.component.html',
  styleUrls: ['./swipe-container.component.scss']
})
export class SwipeContainerComponent implements OnInit {
  @Input() items: any[];
  constructor() { }

  ngOnInit(): void {
  }

}
