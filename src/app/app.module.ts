import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { WeatherBoxComponent } from './components/weather-box/weather-box.component';
import { FooterComponent } from './components/footer/footer.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
// import { HttpHeadersInterceptor } from './interceptors/http-headers-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    SearchBarComponent,
    HeaderComponent,
    WeatherBoxComponent,
    FooterComponent,
    WeatherDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [
  //   {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: HttpHeadersInterceptor,
  //   multi:true,
  //  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
