import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-biriyani',
  templateUrl: './biriyani.component.html',
  styleUrls: ['./biriyani.component.css']
})
export class BiriyaniComponent implements OnInit {
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
  list9(){
    this.router.navigate(['ORDER'])
  }
  list10(){
    this.router.navigate(['ORDER'])
  }
  list11(){
    this.router.navigate(['ORDER'])
  }
  list12(){
    this.router.navigate(['ORDER'])
  }
  back(){
    this.router.navigate(['Menu'])
  }

}
