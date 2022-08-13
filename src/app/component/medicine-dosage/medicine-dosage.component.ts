import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicine-dosage',
  templateUrl: './medicine-dosage.component.html',
  styleUrls: ['./medicine-dosage.component.css']
})
export class MedicineDosageComponent implements OnInit {
  amount: any;
  time: any;

  constructor() { }


  ngOnInit(): void {
  }

  log(value: string[]): void {
    console.log(value);
  }

  save() {
    console.log(this.amount + this.time)
  }
}
