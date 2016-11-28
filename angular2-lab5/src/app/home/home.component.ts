import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  chordProSheets: any = [];

  constructor(private http: Http) { }

  ngOnInit() {
    //Get public chordprosheets
    this.http
      .get('/api/chordprosheet/public')
      .map(res => res.json())
      .subscribe(chordprosheets => this.chordProSheets = chordprosheets, err => console.log("Get failed"));
  }

}
