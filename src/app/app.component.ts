import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
//import * as owlCarousel from 'owl.carousel2';


declare var owlCarousel:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

 
  ngOnInit() {
    
  }
  idExperiencia = "NULL"

  idRecibido(id){
    this.idExperiencia = id;
  }
}

