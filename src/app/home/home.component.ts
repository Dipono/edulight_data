import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ApplicantService } from '../applicant.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  login={
    userName:'',
    passwrd:''
  }

  constructor(private _router:Router, private app:ApplicantService) { }

  ngOnInit(): void {
    localStorage.removeItem('menteeApplicants');
    localStorage.removeItem('admin');    
  }
  errMessageUser:string
  errMessagePass:string
  errorLog:string
  
  dash(){
    this.errMessageUser= ''
    this.errMessagePass = ''
    this.errorLog =''
    console.log(this.login)
    if(this.login.userName != ''){
     // this.errMessageUser= ''
      if(this.login.passwrd != ''){
        //this.errMessagePass = ''
        this.app.userLogin(this.login)
        .subscribe(data=>{
          /*const getValues: NavigationExtras = {
            state: {
              values: data
            }
            
          };*/
          console.log('success')
          localStorage.setItem('admin', JSON.stringify(data))
          

          this._router.navigate(['/dashboard'])
          //this._router.navigate(['/dashboard'], getValues)
        }, error=>{
          return this.errorLog ="Wrong Username or Password"
        })
      }
      else{
        this.errMessagePass = 'Please enter User Password'
      }
    }

    else{ 
      this.errMessageUser = 'Please enter User Name'
    }
  }

}
