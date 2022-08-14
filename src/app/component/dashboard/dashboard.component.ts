import { Component, OnInit } from '@angular/core';
import {HealthVitalsService} from '../../services/health-vitals.service'
import {AppointmentService} from '../../services/appointment.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private health:HealthVitalsService,
              private appoinment:AppointmentService) { }
   data:any
  list:any
  ngOnInit(): void {
    this.get()
    this.getAppointment()
  }

  get(){
    this.health.getLast()
      .subscribe({
        next:(res)=>{
          console.log(res)
          this.data = res.data
        },
        error:(e)=>console.error(e)
      })
  }
  getAppointment(){
    this.appoinment.get(1,"","","")
      .subscribe({
        next:(res)=>{
          this.list = res.data.items
          console.log(res)
        },
        error:(e)=>console.error(e)
      })
  }

}
