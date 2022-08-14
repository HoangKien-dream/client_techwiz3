import { Component, OnInit } from '@angular/core';
import {MedicinService} from '../../services/medicin.service'
import {format} from "date-fns";

@Component({
  selector: 'app-medicine-dosage-list',
  templateUrl: './medicine-dosage-list.component.html',
  styleUrls: ['./medicine-dosage-list.component.css']
})
export class MedicineDosageListComponent implements OnInit {

  constructor(private medicin:MedicinService) { }
data:any
  page=1
  name=""
  startDate=""
  endDate=""
  dateFormat="yyyy/MM/dd";
  date = []

  ngOnInit(): void {
    this.getAll()
  }
getAll(){
    this.medicin.getAll(this.name,this.page,this.startDate,this.endDate)
      .subscribe({
        next:(res)=>{
          console.log(res)
          this.data = res.data.items
        },
        error:(e)=>console.error(e)
      })
}

  search() {
    console.log(this.name)
    if (this.date.length>0 && this.date != null) {
      this.startDate = format(this.date[0], 'dd-MM-yyyy')
      this.endDate = format(this.date[1], 'dd-MM-yyyy')
      console.log(this.startDate);
      console.log(this.endDate);
    }
    this.getAll()
  }
}
