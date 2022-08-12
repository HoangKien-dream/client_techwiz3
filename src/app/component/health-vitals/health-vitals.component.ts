import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-health-vitals',
  templateUrl: './health-vitals.component.html',
  styleUrls: ['./health-vitals.component.css']
})
export class HealthVitalsComponent implements OnInit {
  isVisible = false;
  constructor() { }

  ngOnInit(): void {
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

}
