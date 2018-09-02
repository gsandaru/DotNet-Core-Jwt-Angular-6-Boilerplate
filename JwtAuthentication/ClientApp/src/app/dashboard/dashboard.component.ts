import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
  }

  getdata() {
    this.http.get("/api/sampledata/getdata").subscribe(x => console.log(x));
  }

}
