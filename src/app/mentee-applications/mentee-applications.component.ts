import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { ApplicantService } from '../applicant.service';

@Component({
  selector: 'app-mentee-applications',
  templateUrl: './mentee-applications.component.html',
  styleUrls: ['./mentee-applications.component.css']
})
export class MenteeApplicationsComponent implements OnInit {

  applicationInfo:any
  tertiaryInfo:any
  gradeInfo:any
  subjectsInfo:any

  constructor(private _router:Router, private route: ActivatedRoute, private applicant:ApplicantService) {
    this.route.queryParams.subscribe(params => {
      if (this._router.getCurrentNavigation().extras.state) {
        this.applicationInfo = this._router.getCurrentNavigation().extras.state.values;
        localStorage.setItem('menteeApplicants',  JSON.stringify(this.applicationInfo))
      }
    })
  }
  
  ngOnInit(): void {
    /*if(window.location.reload()){
      this._router.navigate(['/dashboard'])
    }*/
    
    this.getAllMenteeApplications()
  }
  
  

  getAllMenteeApplications(){

    console.log(this.applicationInfo)
    this.applicationInfo = JSON.parse(localStorage.getItem('menteeApplicants'))
    
    if(this.applicationInfo != undefined){

      console.log(this.applicationInfo)
      for(var k = 0; k < this.applicationInfo.length; k++ ){
        if(Number(this.applicationInfo[k].alt_Phone_Number) == 0){
          this.applicationInfo[k].alt_Phone_Number = ''
        }
        else{
          this.applicationInfo[k].alt_Phone_Number = '0'+ this.applicationInfo[k].alt_Phone_Number
        }
      }
    }
    else{
      console.log('out')
      this._router.navigate(['/dashboard'])
    }
    
    
  }
  menteeEducation(student_Id){
    this.applicant.getGrades(student_Id)
    .subscribe(data=>{
      const getValues: NavigationExtras={
        state:{
          values: data
        }
      }
      this._router.navigate(['/mentee-education'],getValues)
    })
    
  }



  back(){
    localStorage.removeItem('menteeApplicants')  
    //localStorage.removeItem('student_ID')
      
    this._router.navigate(['/dashboard'])
  }

  logout(){
    localStorage.removeItem('admin')
    //localStorage.removeItem('student_ID')
    localStorage.removeItem('menteeApplicants')    
    this._router.navigate(['/'])
  }
}
