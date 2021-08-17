import { Component, Input, OnInit } from '@angular/core';
import { Weather } from 'src/app/weather';
import * as cities from './../../../assets/cities.json';
import { WeatherBoxComponent } from '../weather-box/weather-box.component';
import { HttpService } from 'src/app/services/http.service';


@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
  cityCodess: string[];

  cityName:string;
  
  weatherCollection: Weather[] = [];
  
  constructor() { }  


  ngOnInit(): void {
    // this.getCityCodes();
  }

  


}


