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

  handleDrop(): void {
    console.log(this.card.nativeElement.style);
    this.card.nativeElement.style.transform=null;
  }
}
