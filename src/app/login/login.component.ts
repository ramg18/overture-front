import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public form = {
    email: null,
    password: null
  };

  public error = null;

  constructor( 
    public route: Router,
    
    ){ }

  ngOnInit() {
   //this.onSubmit();
  }

  entrar(){
    this.route.navigate(['/pages/dashboard']);
  }

  onSubmit() {
    
  }

  
  nameResponse(data){
    
  } 

  

}
