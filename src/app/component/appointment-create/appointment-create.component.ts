import { Component, OnInit } from '@angular/core';
import {format} from "date-fns";
import {AppointmentService} from "../../services/appointment.service"
@Component({
  selector: 'app-appointment-create',
  templateUrl: './appointment-create.component.html',
  styleUrls: ['./appointment-create.component.css']
})
export class AppointmentCreateComponent implements OnInit {
  date: any;
  bokingDate:any
  note:any;
  address:any

  constructor(private appointment:AppointmentService) { }

  ngOnInit(): void {
  }

  onChange(result: Date): void {
    var date = format(result,'yyyy-MM-dd')
    var time = format(result,'hh:mm:ss')
    this.date = date +"T"+time;
    console.log(this.date)
  }

  save(){
    var appointment = {
      bookingDate:this.date,
      address:this.address,
      note:this.note,
      accountId:1
    }
    console.log(appointment)
    this.appointment.create(appointment)
      .subscribe({
        next:(res)=>{
          console.log(res)
    },
        error:(e) => console.error(e)
      })
  }
}
