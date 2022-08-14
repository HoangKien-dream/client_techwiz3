import { Component, OnInit } from '@angular/core';
import {MedicinService} from '../../services/medicin.service'
import {format} from "date-fns";

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
  time: any;
  data:any
  reminderTimesSet:any
 json:any;
  constructor(private medicin:MedicinService) { }


  ngOnInit(): void {
  }

  log(value: string[]): void {
    this.days = value.toString()
    console.log(value.toString());
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
        time:this.time
      }]
    }
    this.medicin.save(data)
      .subscribe({
        next:(res)=>{
          console.log(res)
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
