import { Component, OnInit } from '@angular/core';
import {HealthVitalsService} from '../../services/health-vitals.service'
import {format} from "date-fns";

@Component({
  selector: 'app-health-vitals',
  templateUrl: './health-vitals.component.html',
  styleUrls: ['./health-vitals.component.css']
})
export class HealthVitalsComponent implements OnInit {
  isVisible = false;
  data?:any
  accountId=1
  bloodPressure?:any
  hearthRate?:any
  spO2?:any
  glucoseLevel?:any
  bodyTemperature?:any
  weight?:any
  height?:any
  startDate = ""
  endDate = ""
  dateFormat="yyyy-MM-dd"
  date=[]
  constructor(private health:HealthVitalsService) { }

  ngOnInit(): void {
    this.getAll()
  }
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  save() {
    var data = {
      accountId:this.accountId,
      bloodPressure:this.bloodPressure,
      heartRate:this.hearthRate,
      spO2:this.spO2,
      glucoseLevel:this.glucoseLevel,
      bodyTemperature:this.bodyTemperature,
      weight:this.weight,
      height:this.height
    }
    this.health.create(data)
      .subscribe({
        next:(res)=>{
          console.log(res)
          window.location.reload()
        },
        error:(e)=>console.error(e)
      })
  }
  getAll(){
    this.health.get(this.startDate,this.endDate)
      .subscribe({
        next:(res)=>{
          this.data = res.data.items;
          console.log(this.data)
        },
        error:(e)=> console.error(e)
      })
  }


  search() {
    console.log(this.date);
    if (this.date.length>0 && this.date != null) {
      this.startDate = format(this.date[0], 'dd-MM-yyyy')
      this.endDate = format(this.date[1], 'dd-MM-yyyy')
      console.log(this.startDate);
      console.log(this.endDate);
    }
    this.getAll()
  }
}
