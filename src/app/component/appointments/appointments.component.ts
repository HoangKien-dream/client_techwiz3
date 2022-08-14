import {Component, OnInit, SimpleChange} from '@angular/core';
import {AppointmentService} from '../../services/appointment.service'
import {DatePipe} from "@angular/common";
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router} from '@angular/router';
import {format} from "date-fns";

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  constructor(private appointment:AppointmentService,
              private router:Router,
              private message:NzMessageService) { }
  dateFormat = "yyyy-MM-dd"
  id?:any
  address?:any
  note?:any
  page=1;
  startDate=""
  endDate=""
  keyword=""
  data?:any
  isVisible: any;
  date=[]
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

  delete(id:any){
    this.appointment.delete(id)
      .subscribe({
        next:(res)=>{
          console.log(res)
          window.location.reload()
        },
        error:(e)=>console.error(e)
      })
  }


  search() {
    if (this.date.length>0 && this.date != null) {
      this.startDate = format(this.date[0], 'dd-MM-yyyy')
      this.endDate = format(this.date[1], 'dd-MM-yyyy')
      console.log(this.startDate);
      console.log(this.endDate);
    }
    this.getAll()
  }
}
