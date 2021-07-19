import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;


  constructor(
    private formBuilder : FormBuilder 
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password : ['', Validators.required]
    });
  }

  get f() { return this.form.controls; }

  onSubmit(){
    this.submitted = true;
    if(this.form.invalid) {
      return;
    }
    this.loading = true;
  }

}
