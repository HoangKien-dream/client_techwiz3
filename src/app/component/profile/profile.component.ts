import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../../services/profile.service'
import {format} from "date-fns";
import { Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private profile:ProfileService,
              private router:Router) { }
  firstName?:any
  lastName?:any
  dob?:any
  avatar?:any
  mobile?:any
  address?:any
  city?:any
  bloodGroup?:any
  country?:any
  gender :any

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
          if (res.data.bloodGroup != null){
            this.bloodGroup = res.data.bloodGroup
          }else {
            this.bloodGroup = "A+"
          }
          this.country = res.data.country
          if (res.data.gender=="MALE"){
            this.gender = "1"
          }
          else if (res.data.gender=="FEMALE"){
            this.gender = "0"
          }
          console.log(this.gender)
        }
        ,
        error:(e)=>console.error(e)
      })
  }

  save() {
    var data = {
      firstName:this.firstName,
      lastName:this.lastName,
      dateOfBirth:this.dob,
      avatar:this.avatar,
      mobile:this.mobile,
      address:this.address,
      city:this.city,
      bloodGroup:this.bloodGroup,
      country:this.country,
      gender:this.gender
    }
    console.log(data)
        this.profile.updated(data)
          .subscribe({
            next:(res)=>{
              console.log(res)
              window.location.reload()
            },
            error:(e)=>console.error(e)
          })
  }
  onChange(result: Date): void {
    this.dob = format(result,"yyyy-MM-dd")
    console.log('onChange: ', result);
  }
}
