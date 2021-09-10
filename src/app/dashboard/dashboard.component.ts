import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute  } from '@angular/router';
import { ApplicantService } from '../applicant.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  admin:any
  userName
  fullName
  phoneNo
  email
  constructor(private _router:Router, private route: ActivatedRoute, private applicant:ApplicantService) { 
    /*this.route.queryParams.subscribe(params => {
      if (this._router.getCurrentNavigation().extras.state) {
        this.admin = this._router.getCurrentNavigation().extras.state.values;
        this.userName = this.admin[0].userName
        this.fullName = this.admin[0].name
        this.phoneNo = this.admin[0].phone_Number
        this.email = this.admin[0].email
      }
    })*/
  }

  ngOnInit(): void {
    this.displayUser()
  }

  displayUser(){

    this.admin = JSON.parse(localStorage.getItem('admin'));

    this.userName = this.admin[0].userName
        this.fullName = this.admin[0].name
        this.phoneNo = this.admin[0].phone_Number
        this.email = this.admin[0].email

      localStorage.removeItem('refreshPage')  
    
  }

  menteeApp:any
  menteeTert:any
  menteeSchool:any
  
  goToMentee(){
    this.applicant.getMentees()
    .subscribe(data=>{
      //localStorage.setItem('menteeApplicants', JSON.stringify(data))
      localStorage.setItem('refreshPage', JSON.stringify(1))
      const getValues : NavigationExtras={
        state:{
          values : data
        }
      }
      console.log(getValues)
      this._router.navigate(['/mentee-applications'],getValues)
    },error=>{
      console.log('cannot load data')
      this._router.navigate(['/dashboard'])
    })
  }

  goToMentor(){
    this.applicant.getMentors()
    .subscribe(data=>{
      localStorage.setItem('mentorApplicants', JSON.stringify(data))
      this._router.navigate(['/mentor-applications'])
      ,error=>{
        console.log('cannot load data')
        this._router.navigate(['/dashboard'])
      }
    })
  }

  logout(){
    localStorage.removeItem('admin')
    localStorage.removeItem('menteeApplicants')
    this._router.navigate(['/'])
  }

}
