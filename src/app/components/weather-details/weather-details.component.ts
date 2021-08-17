import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { Weather } from 'src/app/weather';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {
  // public weatherList:Array<Weather>=[];
  weatherData;
  // unixTime:number = 0; 
  // timezone:number = 0;
  // // date = new Date(this.unixTime*1000+(this.timezone*1000));
  // date = new Date(timeInter));
  
  constructor(
    private router: ActivatedRoute,
    private http: HttpService
    ) { }
    cityCode:string;
    
  ngOnInit(): void {
   this.cityCode = this.router.snapshot.params.id;
   this.getsingleCityInfo();
    console.log(this.cityCode)
  }

  getsingleCityInfo(){
    // console.log(dataset.list[0]); 
    this.http.getWeatherInfo(this.cityCode).subscribe(data=>{
      console.log(data.list)
      this.weatherData = data.list[0]; 
      // this.unixTime = data.list[0].dt;
      // this.timezone = data.list[0].sys[0].timezeon;

      console.log(this.weatherData.weather[0].description);
      // this.weatherList.push(weatherData);
      // this.weatherList.push(weatherData);
      // console.log(this.weatherList)
    })
  }

}
