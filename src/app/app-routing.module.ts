import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { TechnologyComponent } from './technology/technology.component';
import { ScienceComponent } from './science/science.component';
import { HealthComponent } from './health/health.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { HomeComponent } from './home/home.component';
import { SportsComponent } from './sports/sports.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SearchComponent } from './search/search.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [

  { path: "",  redirectTo: "home", pathMatch: 'full' },
  { path: "home",canActivate:[AuthGuard], component: HomeComponent },
  { path: "Business",canActivate:[AuthGuard], component: BusinessComponent },
  { path: "Sports", canActivate:[AuthGuard],component: SportsComponent },
  { path: "Health",canActivate:[AuthGuard], component: HealthComponent },
  { path: "Science",canActivate:[AuthGuard], component: ScienceComponent },
  { path: "Technology",canActivate:[AuthGuard], component: TechnologyComponent },
  { path: "search/:word",canActivate:[AuthGuard], component: SearchComponent },

  { path: "LOGIN", component: LoginComponent },
  { path: "REGISTRATION", component: RegistrationComponent },
  { path: "**", component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
