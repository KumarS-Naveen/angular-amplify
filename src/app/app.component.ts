import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hub } from 'aws-amplify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  appname:string ="hisdsd";
  title = 'amplify-app';
  public createForm!: FormGroup;
  /* declare restaurants variable */
  constructor(private fb: FormBuilder,private http: HttpClient) { }
  ngOnInit(): void {
    this.listen();
    // const url = "http://nodebff-env-1.eba-pn2xek6t.ap-south-1.elasticbeanstalk.com/user";
    // this.http.get("/api", { 'headers': {authorization: data.payload.data.signInUserSession.idToken.jwtToken} }).subscribe(data => {
    //   console.log(data);
    //  // this.appname = data.toString(); 
    // });
    this.createForm = this.fb.group({
      'name': ['', Validators.required],
      'description': ['', Validators.required],
      'city': ['', Validators.required]
    });
  }


  private listen(){
    Hub.listen('auth', (data) => {
      switch (data.payload.event) {
        case 'signIn':

          const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'authorization': data.payload.data.signInUserSession.idToken.jwtToken,
            //   "Access-Control-Allow-Headers" : "Content-Type",
            // "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
            // "Access-Control-Allow-Origin": "http://localhost:4200"
            })
          };
          // const headers= new HttpHeaders();
          // headers.set('authorization', data.payload.data.signInUserSession.idToken.jwtToken)
  
          //data.payload.data.signInUserSession.accessToken.jwtToken
          this.http.get("/api",httpOptions ).subscribe(data => {
            console.log(data);
           // this.appname = data.toString(); 
          });
            break;
        case 'signUp':
            break;
        case 'signOut':
            console.log('user signed out');
            break;
        case 'signIn_failure':
            console.log('user sign in failed');
            break;
        case 'configured':
            console.log('the Auth module is configured');
      }
    });
  }
}
