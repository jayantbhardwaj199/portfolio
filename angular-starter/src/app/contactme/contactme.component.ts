import { Component, OnInit } from '@angular/core';
import { debug } from 'console';
import { Message } from 'emailjs';
import { EmailService } from '../email.service';




@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.css']
})


export class ContactmeComponent implements OnInit {

  constructor(private emailService: EmailService ) { }

  ngOnInit(): void {
  }

  async sendEmail(){
  debugger;
  
  }
}
