import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../../services/profile.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private profile:ProfileService) { }
  firstName?:any
  lastName?:any
  dob?:any
  avatar?:any
  mobile?:any
  address?:any
  city?:any
  bloodGroup?:any
  country?:any
  gender?:any

  ngOnInit(): void {
    this.get()
  }

  get(){
    this.profile.get()
      .subscribe({
        next:(res)=>{
          console.log(res)
          this.firstName =res.data.firstName
          this.lastName = res.data.lastName
          this.dob = res.data.dateOfBirth
          this.avatar = res.data.avatar
          this.mobile = res.data.mobile
          this.address = res.data.address
          this.city = res.data.city
          this.bloodGroup = res.data.bloodGroup
          this.country = res.data.country
          this.gender = res.data.gender
        },
        error:(e)=>console.error(e)
      })
  }

}
