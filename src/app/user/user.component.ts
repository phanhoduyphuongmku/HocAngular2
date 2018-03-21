import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name = '';
  name2 = '';
  shape = true;
  userStyle  = {
    color : 'red',
    fontSize : '30px'
  }
  constructor() { }

  ngOnInit() {
  }
  showEvent(event){
    this.name = event.target.value;
  }
}
