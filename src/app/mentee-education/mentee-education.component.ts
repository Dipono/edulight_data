import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { ApplicantService } from '../applicant.service';


@Component({
  selector: 'app-mentee-education',
  templateUrl: './mentee-education.component.html',
  styleUrls: ['./mentee-education.component.css']
})
export class MenteeEducationComponent implements OnInit {

  school: any
  subjects: any
  tertiary: any
  names
  idNo
  email
  phoneNo
  constructor(private _router: Router, private route: ActivatedRoute, private applicant: ApplicantService) {
    this.route.queryParams.subscribe(params => {
      if (this._router.getCurrentNavigation().extras.state) {
        this.school = this._router.getCurrentNavigation().extras.state.values;

        /* this.applicant.getGrades(this.tertiary[0].stud_id)
         .subscribe(data=>{
           this.school = data
           console.log(data[0].gradeId)
           this.applicant.getSubjects(data[0].gradeId)
           .subscribe(success=>{
             console.log(success)
             this.subjects = success
           })
         })*/
        /*console.log(this.school)
        this.names = this.school[0].surname+' '+this.school[0].names
        this.idNo = this.school[0].stud_id
        this.email = this.school[0].email
        this.phoneNo = this.school[0].phone_Number*/
      }
    });
  }
  ngOnInit(): void {
    this.getMentee()
  }

  getMentee() {

    if (this.school != undefined) {
      this.names = this.school[0].surname + ' ' + this.school[0].names
      this.idNo = this.school[0].stud_id
      this.email = this.school[0].email
      this.phoneNo = this.school[0].phone_Number



      this.applicant.getTertiary(this.idNo)
        .subscribe(data => {
          this.tertiary = data
        })

      this.applicant.getSubjects(this.school[0].gradeId)
        .subscribe(success => {
          this.subjects = success
        })
    }

    else {
      this._router.navigate(['/mentee-applications'])
    }



    /* this.applicant.getGrades(this.idNo)
     .subscribe(data=>{
       this.school = data
       
     })
     */
  }

  backToAllApplicant() {
    //localStorage.removeItem('student_ID')
    this._router.navigate(['/mentee-applications'])

  }

  logout() {
    //localStorage.removeItem('student_ID')
    //localStorage.removeItem('menteeApplicants')
    this._router.navigate(['/'])
  }



}
