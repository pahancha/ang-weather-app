import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';

const routes: Routes = [
  {
    path: '',
    component:DashBoardComponent,
  },
  {
    path:'search/:weather-search',
    component:DashBoardComponent,
  },
  {
    path:'details/:id',
    component:WeatherDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
