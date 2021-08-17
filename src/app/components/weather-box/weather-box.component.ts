import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { HttpService } from 'src/app/services/http.service';
import {  Weather } from 'src/app/weather';
// import {  APIResponse, Weather } from 'src/app/weather';
import * as cities from './../../../assets/cities.json';


@Component({
  selector: 'app-weather-box',
  templateUrl: './weather-box.component.html',
  styleUrls: ['./weather-box.component.scss']
})
export class WeatherBoxComponent implements OnInit {
  pictures:string[] = ['blue','green','orange','purple','red','white','yellow'];
  
  cityCodes: string[];

  public weatherList:Array<Weather>=[];
  // weatherList = [];

  cityName:string;
  

  constructor(
    private httpServide: HttpService,
  ) { }  


  ngOnInit(): void {
    this.getCityCodes();
    this.getweatherDetailsService();
  }

  getCityCodes(){
    this.cityCodes= cities.List.map(city => {return(city.CityCode)})
    console.log(this.cityCodes)
  }

getweatherDetailsService(){
  this.cityCodes.map(code => {
    this.httpServide.getWeatherInfo(code).subscribe(dataset=>{
      console.log(dataset.list)
      // console.log(dataset.list[0]); 
      let weatherData:Weather = dataset.list[0]; 
      console.log(weatherData.name);
      this.weatherList.push(weatherData);
      // this.weatherList.push(weatherData);
      // console.log(this.weatherList)
    });
  })

}



getCity(city:string){
  this.httpServide.getWeatherByCityName(city).subscribe(data => {
    console.log(data.list)
    // let weatherData:Weather = data.list[0]; 
    // this.weatherList.push(weatherData);
  });

}





  // getWeatherDetails(){
  //   this.cityCodes.map(code => {this.httpServide.getWeatherInfo(code).subscribe(data=> this.weatherList = data)});
  //   console.log(this.weatherList.results)

  // }


  
} 
