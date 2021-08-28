import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  appname:string ="";
  title = 'amplify-app';
  public createForm!: FormGroup;
  /* declare restaurants variable */
  constructor(private fb: FormBuilder,private http: HttpClient) { }
  ngOnInit(): void {
    const url = `http://nodebff-env-1.eba-pn2xek6t.ap-south-1.elasticbeanstalk.com/user`;
    this.http.get(url).subscribe(data => {
      this.appname = data.toString();
    });
    this.createForm = this.fb.group({
      'name': ['', Validators.required],
      'description': ['', Validators.required],
      'city': ['', Validators.required]
    });
  }
}
