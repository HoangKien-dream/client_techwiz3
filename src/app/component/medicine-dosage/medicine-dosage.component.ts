import { Component, OnInit } from '@angular/core';
import {MedicinService} from '../../services/medicin.service'
import {format} from "date-fns";
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router} from '@angular/router';

@Component({
  selector: 'app-medicine-dosage',
  templateUrl: './medicine-dosage.component.html',
  styleUrls: ['./medicine-dosage.component.css']
})
export class MedicineDosageComponent implements OnInit {
  name:any;
  startDate:any;
  duration:any;
  days:any
  note:any
  amount: any;
  time:any;
  data:any
  reminderTimesSet:any
 json:any;
  constructor(private medicin:MedicinService,
              private message:NzMessageService,
              private router:Router) { }


  ngOnInit(): void {
  }

  log(value: string[]): void {
    this.days = value.toString()
    console.log(value.toString());
  }
  logTime(timea: Date): void {
    localStorage.setItem("time",format(timea,"HH:mm:ss"))
    // console.log(time.toTimeString().toString("HH:mm:ss"));
  }

  save() {
    var data = {
      name:this.name,
      startDate:this.startDate,
      duration:this.duration,
      days:this.days,
      note:this.note,
      reminderTimesSet:[{
        amount:this.amount,
        time:localStorage.getItem("time")
      }]
    }
    console.log(data)
    this.medicin.save(data)
      .subscribe({
        next:(res)=>{
          console.log(res)
          this.router.navigate(['medicine-list'])
            .then(
              ()=>window.location.reload()
            )
        },
        error:(e)=>console.error(e)
      })
  }

  add() {
    // this.data= {
    //   reminderTimesSet:[{
    //   }]
    // }
    // var order={
    //  amount:this.amount,
    //   time:this.time
    // }
    // if (order.amount != null && order.time != null){
    //   this.data.reminderTimesSet.push(order)
    // }
    // console.log(this.data)
  }
  onChange(result: Date): void {
    this.startDate = format(result,"yyyy-MM-dd")
    console.log('onChange: ', result);
  }
}
