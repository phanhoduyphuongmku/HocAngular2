import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {
  arrPersons = [
    {name:'Phuong',year:'1982',add:'vinh logn'},
    {name:'Minh',year:'1932',add:'vinh long'},
    {name:'Hung',year:'1983',add:'Tiền Giang'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
