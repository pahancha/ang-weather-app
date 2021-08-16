import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(private http:HttpService) { }

  ngOnInit(): void {
  }

  getCity(city){
    this.http.getWeatherByCityName(city).subscribe(data=> console.log(data));
  }




}
