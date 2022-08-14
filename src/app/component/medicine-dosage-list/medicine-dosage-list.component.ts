import { Component, OnInit } from '@angular/core';
import {MedicinService} from '../../services/medicin.service'

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

}
