import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teffin',
  templateUrl: './teffin.component.html',
  styleUrls: ['./teffin.component.css']
})
export class TeffinComponent implements OnInit{
  constructor(private router:Router){

  }
  ngOnInit(): void {
  }
  list(){
    this.router.navigate(['ORDER'])
  }
  list1(){
    this.router.navigate(['ORDER'])
  }
  list2(){
    this.router.navigate(['ORDER'])
  }
back(){
  this.router.navigate(['Menu'])
}
}
