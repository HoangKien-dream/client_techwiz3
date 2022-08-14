import {Component, OnInit, SimpleChange} from '@angular/core';
import {AppointmentService} from '../../services/appointment.service'
import {DatePipe} from "@angular/common";
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router} from '@angular/router';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  constructor(private appointment:AppointmentService,
              private router:Router,
              private message:NzMessageService) { }
  id?:any
  address?:any
  note?:any
  page=1;
  startDate=""
  endDate=""
  keyword=""
  data?:any
  isVisible: any;
  date: any;
  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
     this.appointment.get(this.page,this.keyword,this.startDate,this.endDate)
       .subscribe({
         next:(res)=>{
           console.log(res.data)
           this.data = res.data.items
    },
         error:(e)=>console.error(e)
       })
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  showModal(data:any): void {
    this.isVisible = true;
    this.id = data.id
    this.address = data.address
    this.note = data.note
    this.date = data.bookingDate
  }

  update(){
    var data = {
      bookingDate: this.date,
      note: this.note,
      address:this.address,
      accountId: 1
    }
    this.appointment.update(this.id,data)
      .subscribe({
         next:(res)=>{
           console.log(res)
           this.message.success("Updated Success !!")
           this.router.navigate(['appointment'])
             .then(
               ()=>window.location.reload()
             )
         },
        error:(e)=>{
           this.message.error("Updated Failed")
           console.log(e)
        }
      })
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.update()
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
