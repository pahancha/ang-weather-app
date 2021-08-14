import { Component, OnInit } from '@angular/core';
// import * as cities from './../../../assets/cities.json';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
  cityCodes: string[];

  constructor() { }  


  ngOnInit(): void {
    // this.getCityyCodes();
  }

  getCityyCodes(){
    // this.cityCodes= cities.List.map(city => {return(city.CityCode)})
    // console.log(this.cityCodes)
  }
  
  



}


