import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-backtomenu',
  templateUrl: './backtomenu.component.html',
  styleUrls: ['./backtomenu.component.css']
})
export class BacktomenuComponent implements OnInit {
  constructor(private router:Router){

  }
  ngOnInit(): void {
  
  }
  back(){
    this.router.navigate(['Backtomenu'])
    }

}
