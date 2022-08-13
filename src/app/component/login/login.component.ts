import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authentication:AuthenticationService) { }

  ngOnInit(): void {
  }
  email?:any
  password?:any

  login(){
    const data = new FormData();
    data.append("email",this.email);
    data.append("password",this.password);
    this.authentication.login(data)
      .subscribe({
        next:(res)=>{
          console.log(res)
          localStorage.setItem("token",res.access_token)
    },
        error:(e) => console.error(e)
      })
  }

}
