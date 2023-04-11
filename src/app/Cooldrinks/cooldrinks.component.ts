import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cooldrinks',
  templateUrl: './cooldrinks.component.html',
  styleUrls: ['./cooldrinks.component.css']
})
export class CooldrinksComponent implements OnInit {

  constructor(private router:Router){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
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
  list3(){
    this.router.navigate(['ORDER'])
  }
  list4(){
    this.router.navigate(['ORDER'])
  }
  list5(){
    this.router.navigate(['ORDER'])
  }
  list6(){
    this.router.navigate(['ORDER'])
  }
  list7(){
    this.router.navigate(['ORDER'])
  }
  list8(){
    this.router.navigate(['ORDER'])
  }
back(){
  this.router.navigate(['Menu'])
}
}
