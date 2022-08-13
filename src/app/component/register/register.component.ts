import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authentication:AuthenticationService) { }
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
        },
        error: (e)=>console.error(e)
      })
  }
}
