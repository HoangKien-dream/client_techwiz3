import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service'
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authentication:AuthenticationService,
              private router:Router,
              private message:NzMessageService) { }

  ngOnInit(): void {
  }
  email?:any
  password?:any

  login(){
    const data = new FormData();
    data.append("email",this.email);
    data.append("password",this.password);
    console.log(this.email)
    this.authentication.login(data)
      .subscribe({
        next:(res)=>{
          console.log(res)
          this.message.success("Login Success !!")
          this.router.navigate(['profile']).then(
            ()=>location.reload()
          )
          localStorage.setItem("token",res.access_token)
          localStorage.setItem("email",this.email)
    },
        error:(e) => {
          console.error(e)
          this.message.error("Login Failed")
        }
      })
  }

}
