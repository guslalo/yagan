import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

declare var $: any;
import * as $ from 'jquery';


@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.scss']
})
export class ExperienciasComponent implements OnInit {

  constructor( private router: Router, private titleService: Title) { 


   

    
  }

  ngOnInit() {
    this.titleService.setTitle('Experiencias | gustavo');
    window.scrollTo(0, 0);
    
  }


}
