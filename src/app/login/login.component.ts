import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  data= {
  	email:'',
  	pwd:'',
  	rePwd:''
  };

  formSubmit(){
  	console.log(this.data.email);
  	}
  ngOnInit() {
  }

}
