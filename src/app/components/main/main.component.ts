import { Component, OnInit  } from '@angular/core';

import { RestService } from '../../services/rest/rest.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  private cards:any[];
  private cardsFilter:any[];
  private searchTerm:String;
  constructor(private RestService : RestService) {     
  }


  ngOnInit() {
    this.RestService.getCards()
    .subscribe(
      cardsRes => {
        this.cards = cardsRes['data'];
        this.cardsFilter = this.cards;
      },
      err => {
        console.log(err)
      }
    );
  }

  onSearchTermChange(e) {
    if( !this.searchTerm.trim().length ) {
      this.cardsFilter = this.cards;
    } else {
      this.cardsFilter = this.cards.filter(card => {
        return card.name.toLowerCase().search(this.searchTerm.trim().toLowerCase()) > -1
      });
    }
  }

}
