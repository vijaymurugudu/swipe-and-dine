import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  constructor(private router:Router){

  }
  ngOnInit(): void {

}

get(){
  this.router.navigate(['BIRIYANI'])
}
get1(){
  this.router.navigate(['Mocktails'])
}
get2(){
  this.router.navigate(['Teffin'])
}
get3(){
  this.router.navigate(['Snacks'])
}
get4(){
  this.router.navigate(['Cooldrinks'])
}
get5(){
  this.router.navigate(['Icecreams'])
}

}
