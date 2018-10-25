import { Component, OnInit,ViewChild, Input, EventEmitter, AfterViewInit   } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import * as $ from 'jquery';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

import { Observable } from 'rxjs';
//import 'rxjs/add/observable/fromEvent';
//import * as owlCarousel from 'owl.carousel2';


declare var owlCarousel:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  variable: string;

  constructor(angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {
    angulartics2GoogleAnalytics.startTracking();
  }

  @ViewChild('header') childOne:HeaderComponent;
  @ViewChild('resultadoComponent') childTwo:ExperienciasComponent;

  @ViewChild(HeaderComponent) hijo: HeaderComponent;
  @ViewChild(ExperienciasComponent) hijo2: ExperienciasComponent;

  enviarMensaje() {
    this.hijo.saludo('hola desde el padre');
  }

  enviarMensaje2() {
    this.hijo2.saludo('hola desde el padre al hijo experiencia');
  }

  ngOnInit() {
    
  }
  enviarImfo() {

  }
  ngAfterViewInit() {
    console.log("this.extraIngredient"); // mayo
  }

 
  idExperiencia = "NULL"

  idRecibido(id){
    this.idExperiencia = id;
  }
}

