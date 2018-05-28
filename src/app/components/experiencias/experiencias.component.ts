import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { HttpClient} from "@angular/common/http";
import { ServiciosService } from '../../services/servicios.service';
import { Experience, Category } from '../../models/models';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.scss'],
  providers:[ServiciosService]
})

export class ExperienciasComponent implements OnInit {


 //Arrays Experiences and Category
 Experiences: Experience[] = [];
 Category: Category[] = [];

  constructor( private http : HttpClient,  private ServiciosService: ServiciosService, private router: Router, private titleService: Title) {  }

  ngOnInit() {
    this.titleService.setTitle('Experiencias | Yagan');
    window.scrollTo(0, 0);

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
 
  public idCategory = null;

  //@Output() idCategoryOutput = new EventEmitter();
 
  captureId(id){
    this.idCategory = id;
    /*this.idCategoryOutput.emit(this.idCategory);*/
    console.log("categoria", id);
  }

}
