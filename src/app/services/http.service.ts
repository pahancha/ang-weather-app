import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse, Weather } from '../weather';

// import {  APIResponse, Weather } from '../weather';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  private BASE_URL:string = 'http://api.openweathermap.org/data/2.5/group';  
  private BASE_URL_SEARCH = 'http://api.openweathermap.org/data/2.5/weather'
  private key:string = 'b85b9066ff4578f06377b176b8590826';
  private unit:string = 'metric';
  
  constructor(private http: HttpClient) { }

  getWeatherInfo (cityCode: string,):Observable<APIResponse<Weather>> {
    let params1 = new HttpParams().set('id',cityCode).set('units',this.unit).set('appid',this.key);
    
    // if(search) {
    //   params = new HttpParams().set('cityCode',cityCode).set('search',search);
    // }
    let dataset = this.http.get<APIResponse<Weather>>(this.BASE_URL,{params:params1});
    return dataset;
  }

  getWeatherByCityName(city: string){
    let params1 = new HttpParams().set('q',city).set('units',this.unit).set('appid',this.key);

    let dataset = this.http.get<APIResponse<Weather>>(this.BASE_URL_SEARCH,{params:params1})
    return dataset;
  }

  // getWeatherDetails(cityCode:string): Observable<Weather>{
  //   let params1 = new HttpParams().set('id',cityCode).set('units',this.unit).set('appid',this.key);

  //   const weatherInfoRequest = this.http.get(this.BASE_URL,{params:params1});

  //   return forkJoin({
  //     weatherInfoRequest
  //   }).pipe(
  //     map((resp:any) => {
  //       return{
  //         ...resp[]
  //       }

  //   }))
  // }


}
