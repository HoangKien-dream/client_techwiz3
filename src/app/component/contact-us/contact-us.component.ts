import { Component, OnInit } from '@angular/core';
import {ContactService} from '../../services/contact.service'
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router} from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  name:any
  email:any
  subject:any
  messagebox:any
  constructor(private contact:ContactService,
              private message:NzMessageService,
              private router:Router) { }

  ngOnInit(): void {
    this.email = localStorage.getItem("email")
    console.log(this.email)
  }

  send(){
    var data = {
       name:this.name,
      email:this.email,
      subject:this.subject,
      message:this.messagebox
    }
    console.log(data)
    this.contact.send(data)
      .subscribe({
        next:(res)=>{
          console.log(res)
          this.message.success("Send Contact Success !!!")
        },
        error:(e)=>{
          console.error(e)
          this.message.error("Send Contact Failed ")
        }
      })
  }
}
