import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class RestService {

  private API_URL : String;

  constructor(private http: Http) { 
    this.API_URL = 'http://interview.cignalio.com';
  }

  public getCards()  {
    return this.sendToServer('rest/app/list');
  }

  public getCardData(id)  {
    return this.sendToServer(`rest/app/${id}`);
  }

  private sendToServer(path) : Observable<any[]> {
    return this.http.get(`${this.API_URL}/${path}`)
    .map((res : Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
