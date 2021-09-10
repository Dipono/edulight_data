import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MentorApplicationsComponent } from './mentor-applications/mentor-applications.component';
import { ApplicantService } from './applicant.service';
//import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenteeApplicationsComponent } from './mentee-applications/mentee-applications.component';
import { MenteeEducationComponent } from './mentee-education/mentee-education.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MentorApplicationsComponent,
    DashboardComponent,
    MenteeApplicationsComponent,
    MenteeEducationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component:HomeComponent},
      {path: 'mentor-applications', component:MentorApplicationsComponent},
      {path: 'dashboard', component:DashboardComponent},
      {path: 'mentee-applications', component:MenteeApplicationsComponent},
      {path: 'mentee-education', component:MenteeEducationComponent}
      
    ]),
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [ApplicantService/*,{provide: LocationStrategy,useClass: HashLocationStrategy}*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
