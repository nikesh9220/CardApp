import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() counts: number;
  items: string[] = [];
  constructor() { }

  ngOnInit() {
    this.createRange(this.counts);
  }

  createRange(count: number) {
    this.items = [];
    for (let i = 0; i < count; i++) {
       this.items.push('Down');
    }
    return this.items;
  }

  cardClick(index: number) {
    this.items = [];
    for (let i = 0; i < this.counts; i++) {
      if (i === index) {
        this.items.push('Up');
      }  else {
        this.items.push('Down');
      }
    }
  }
}
