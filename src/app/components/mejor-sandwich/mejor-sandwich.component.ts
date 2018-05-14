import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-mejor-sandwich',
  templateUrl: './mejor-sandwich.component.html',
  styleUrls: ['./mejor-sandwich.component.scss']
})
export class MejorSandwichComponent implements OnInit {

  bootRate = 1;
  faRate = 1;
  cssRate = 1;
  faoRate = 5.6;
  faoRated = false;
  rate:any;

  onFaoRate(e) {
    this.faoRated = true;
    this.faoRate = e;
  }

  faoReset() {
    this.faoRated = false;
    this.faoRate = 5.6;
  }
  constructor() { 

    
  }

  ngOnInit() {


     }
}
