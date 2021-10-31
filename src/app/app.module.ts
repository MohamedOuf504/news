import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { BusinessComponent } from './business/business.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HealthComponent } from './health/health.component';
import { ScienceComponent } from './science/science.component';
import { SportsComponent } from './sports/sports.component';
import { TechnologyComponent } from './technology/technology.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SearchComponent } from './search/search.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    BusinessComponent,
    EntertainmentComponent,
    HealthComponent,
    ScienceComponent,
    SportsComponent,
    TechnologyComponent,
    FooterComponent,
    NotfoundComponent,
    SearchComponent,
    SidebarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    CarouselModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
