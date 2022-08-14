import {Component, OnInit} from '@angular/core';
import {ProfileService} from './services/profile.service'
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'health';
  token?:any
  data?:any
  ngOnInit(): void {
    this.checkLogin()
  }
  constructor(private profile:ProfileService,
              private router:Router){

  }
  checkLogin(){
    this.token = localStorage.getItem("token");
    console.log(this.token);
    this.profile.get()
      .subscribe({
        next:(res)=>{
          console.log(res);
          this.data = res.data
        },
        error:(e)=>console.error(e)
      })
  }

  logout() {
    localStorage.removeItem("token");
    this.router.navigate(['login'])
      .then(
        () => location.reload()
      )
  }
}

