import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

  constructor(private http: HttpClient) { }
  
  getMentors(){
    return this.http.get('https://edulight-server.herokuapp.com/getAllMentorApplications');
  }

  
  getMentees(){
    return this.http.get('https://edulight-server.herokuapp.com/getAllMenteeApplications');    
  }
  userLogin(body: any){
      return this.http.post('https://edulight-server.herokuapp.com/loginUser', body, {
        observe: 'body'
      })
  }

  getGrades(id){
    return this.http.get('https://edulight-server.herokuapp.com/getGrade/'+id);    
  }

  getSubjects(id){
    return this.http.get('https://edulight-server.herokuapp.com/getSubject/'+id);    
  }
  getTertiary(id){
    return this.http.get('https://edulight-server.herokuapp.com/getTertiary/'+id);    
  }
  

  // *****************************  LOCALHOST *****************************  LOCALHOST  *******************************//
/*
  userLogin(body: any){
      return this.http.post('http://localhost:4041/loginUser', body, {
        observe: 'body'
      })
  }

  getMentors(){
    return this.http.get('http://localhost:4041/getAllMentorApplications');
  }

  getMentees(){
    return this.http.get('http://localhost:4041/getAllMenteeApplications');    
  }

  getGrades(id){
    return this.http.get('http://localhost:4041/getGrade/'+id);    
  }

  getSubjects(id){
    return this.http.get('http://localhost:4041/getSubject/'+id);    
  }

  getTertiary(id){
    
    return this.http.get('http://localhost:4041/getTertiary/'+id);    
  }
*/
}
