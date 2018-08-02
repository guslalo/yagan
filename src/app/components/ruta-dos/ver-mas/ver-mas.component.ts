import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-ver-mas',
  templateUrl: './ver-mas.component.html',
  styleUrls: ['./ver-mas.component.scss']
})
export class VerMasComponent implements OnInit {

  @Input() public idItem2:any;

  constructor() { }

  ngOnChanges(){
   console.log(this.idItem2);
  }

  ngOnInit() {
   
  }

}
