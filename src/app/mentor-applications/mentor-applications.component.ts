import { Component, OnInit } from '@angular/core';
import { ApplicantService } from '../applicant.service';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-mentor-applications',
  templateUrl: './mentor-applications.component.html',
  styleUrls: ['./mentor-applications.component.css']
})
export class MentorApplicationsComponent implements OnInit {
  mentorApplicant:any
  constructor(private applicant:ApplicantService, private _router:Router) {
    let cnt = 0;
    if(cnt < 0){
      window.location.reload();
      cnt = 1;
    }  
   }

  ngOnInit(): void {
    this.allApplicant()
  }

  allApplicant(){

    this.mentorApplicant =  JSON.parse(localStorage.getItem('mentorApplicants'))
    
    /*this.applicant.getMentors()
    .subscribe(data=>{
      this.applicants = data
      console.log(data)
    })*/
  }

  back(){
    localStorage.removeItem('menteeApplicants')    
    this._router.navigate(['/dashboard'])
  }


  logout(){
    localStorage.removeItem('admin')
    localStorage.removeItem('menteeApplicants')    
    this._router.navigate(['/'])
  }

}
