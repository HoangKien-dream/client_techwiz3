import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service'
import { Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authentication:AuthenticationService,
              private router:Router) { }
   email?:any
  password?:any
  ngOnInit(): void {
  }
  register(){
    var data = {
      email:this.email,
      password:this.password
    }
    this.authentication.register(data)
      .subscribe({
        next: (res) =>{
          console.log(res);
          this.router.navigate(['login'])
        },
        error: (e)=>console.error(e)
      })
  }
}
