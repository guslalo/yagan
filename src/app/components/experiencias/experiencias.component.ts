import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { HttpClient} from "@angular/common/http";
import { ServiciosService } from '../../services/servicios.service';
import { Experience, Category, Ruta } from '../../models/models';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.scss'],
  providers:[ServiciosService]
})

export class ExperienciasComponent implements OnInit {
  idCategoriaRecibido:any;

 //Arrays Experiences and Category
 Experiences: Experience[] = [];
 Category: Category[] = [];
 SubCategory: Category[] = [];
 CategoryFilter: Category[] = [];
 rutas: Ruta[] = [];

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

        this.CategoryFilter = this.Category.filter(r => r.category_parent == null);
        this.SubCategory = this.Category.filter(r => r.category_parent != null);
      },
      error => {
        console.log(<any>error);
      }
    ); 

    this.ServiciosService.getRutas().subscribe( 
      data => {
      

        this.rutas = data;
      
       
       
        //this.rutaName = data.filter(r2 => r2.name);
        //console.log(this.rutaName)

        //title
        
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

  /*onRedCheckboxChange(evt) {
    // your filterObject would look like this:
    // { blue: true, red: false, green: false }
    this.filterObject.red = evt.checked;
    this.myService.filterData(this.filterObject);
  }*/

}

