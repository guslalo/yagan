import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


//declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  ngOnInit() {
    //$('body [data-toggle="tooltip"]').tooltip()
  }
}

