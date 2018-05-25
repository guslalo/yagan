import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { HttpClient} from "@angular/common/http";
import { ServiciosService } from '../../services/servicios.service';
//import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[ServiciosService]
})
export class HomeComponent implements OnInit {


  constructor(private http : HttpClient,  private ServiciosService: ServiciosService, private router: Router, private titleService: Title){}

  ngOnInit() {
    this.titleService.setTitle('home | Yagan');
    
    /*this.http.get('http://yagan.dev21.cl/experience/api/experience/').subscribe( 
      data => {
        console.log(data);
      },
      error => {
        console.log(<any>error);
      }
    ); */
    
    this.ServiciosService.getExperience().subscribe( 
      data => {
        console.log(data);
      },
      error => {
        //console.log(<any>error);
      }
    ); 

    
  }

}
