import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { APIResponse, Weather } from 'src/app/weather';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  searchResults:APIResponse<Weather>;

  dataEvent = new BehaviorSubject(null);
  currentData = this.dataEvent.asObservable();
  
  constructor(private http:HttpService) { }
  
  ngOnInit(): void {
  }
  
  getCity(city){
    this.http.getWeatherByCityName(city).subscribe(data=>console.log(data));
    // this.sendData()
  }

}
