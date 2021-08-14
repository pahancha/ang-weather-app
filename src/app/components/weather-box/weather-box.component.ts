import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { Weather } from 'src/app/weather';
import * as cities from './../../../assets/cities.json';

@Component({
  selector: 'app-weather-box',
  templateUrl: './weather-box.component.html',
  styleUrls: ['./weather-box.component.scss']
})
export class WeatherBoxComponent implements OnInit {
  cityCodes: string[];
  public weatherInfo:Observable<Weather>;

  constructor(
    private httpServide: HttpService,
    private activatedRoute: ActivatedRoute
  ) { }  


  ngOnInit(): void {
    this.getCityCodes();
    this.getWeatherDetails();
    // console.log(this.httpServide.getWeatherInfo("1248991"))
  }

  getCityCodes(){
    this.cityCodes= cities.List.map(city => {return(city.CityCode)})
    console.log(this.cityCodes)
  }

  getWeatherDetails(){
    this.cityCodes.map(code => {
      this.httpServide.getWeatherInfo(code).subscribe(data => {console.log(data)})
    })
  }

  

  

}
