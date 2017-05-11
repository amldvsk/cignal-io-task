import { Params } from '@angular/router/router';
import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest/rest.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-app-page',
  templateUrl: './app-page.component.html',
  styleUrls: ['./app-page.component.css'],
})
export class AppPageComponent implements OnInit {

  private cardData:any[]
  private id:Number;

  constructor(private route: ActivatedRoute, private RestService : RestService) {     
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.id = params.id;
    });

    this.RestService.getCardData(this.id)
    .subscribe(
      cardData => {
        this.cardData = cardData['data'];
      },
      err => {
        console.log(err)
      }
    );

      
    }
  


}
