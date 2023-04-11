import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class ORDERComponent implements OnInit {
  constructor(private router:Router){
    
  }
  ngOnInit(): void {

  }
mix(){
  this.router.navigate(['Pay'])
}
}
