import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headersecond',
  templateUrl: './headersecond.component.html',
  styleUrls: ['./headersecond.component.css']
})
export class HeadersecondComponent implements OnInit {

 
  constructor() { }

  public greetingMessage = "";

  ngOnInit(): void {
    this.greetingMessage = this.getGreeting();
  }

  getGreeting(): any{
    var myDate = new Date();
    var hrs = myDate.getHours();

    var greet;

    if (hrs < 12)
        greet = 'Good Morning';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Good Afternoon';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Good Evening';

        return greet;
  }

}
