import { Component, OnInit,  } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { HttpClient} from "@angular/common/http";
import { ServiciosService } from '../../services/servicios.service';
//import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs/Rx';
import { Experience, Category } from '../../models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[ServiciosService]
})

export class HomeComponent implements OnInit {
  idExperiencia = "NULL"

  idRecibido(id){
    this.idExperiencia = id;
  }
  
  //constructor
  constructor(
    private http : HttpClient,  
    private ServiciosService: ServiciosService, 
    private router: Router, 
    private titleService: Title
  ){ }

  //Arrays Experiences and Category
  Experiences: Experience[] = [];
  Category: Category[] = [];

  ngOnInit() {
    //scrollTop
    window.scrollTo(0, 0);

    //title
    this.titleService.setTitle('Descubre experiencias y vive tu propio Chile | Yagan');
   
    //get experiencias  
    this.ServiciosService.getExperience().subscribe( 
      data => {
        for(let item of data){ 
          this.Experiences.push(item);
        } 
      },
      error => {
        console.log(<any>error);
      }
    ); 

    //get categorias  
    this.ServiciosService.getCategory().subscribe( 
      data => {
        for(let item of data){ 
          this.Category.push(item);
        } 
      },
      error => {
        console.log(<any>error);
      }
    ); 
    
  }

}
