import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards-list-item',
  templateUrl: './cards-list-item.component.html',
  styleUrls: ['./cards-list-item.component.css']
})
export class CardsListItemComponent implements OnInit {

  @Input() card:any;
  constructor() { }

  ngOnInit() {
  }

}
