

import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { HttpClient} from "@angular/common/http";
import { ServiciosService } from '../../services/servicios.service';
import { Category, Region, Duracion,subCategory } from '../../models/models';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.scss'],
  providers:[ServiciosService]
})

export class ExperienciasComponent implements OnInit {

 Category: Category[] = [];
 SubCategory: Category[] = [];
 SubCategoryFilter: Category[] = [];
 CategoryFilter: Category[] = [];
 region: Region[] = [];
 duracion: Duracion[] = [];
 public resultados:subCategory;


 id: any;
 private sub: any;

constructor( private http : HttpClient,  private ServiciosService: ServiciosService, private router: Router, private titleService: Title,  private route: ActivatedRoute) {  }

  ngOnInit() {
    this.titleService.setTitle('Rutas y experiencias | Yagan');
    
    $(".menusidebar .sidebarMobile").click(function(){
      $(".menusidebar").find("form").slideToggle();
    })
    window.scrollTo(0, 0);

    //get categorias  
    this.ServiciosService.getCategory().subscribe( 
      data => {
        this.CategoryFilter = data.filter(r => r.category_parent == null);
      },
      error => {
        console.log(<any>error);
      }
    );
    
     //get regiones  
    this.ServiciosService.getRegiones().subscribe( 
      data => {
        this.region = data;
      },
      error => {
        console.log(<any>error);
      }
    ); 

    //get duracion  
    this.ServiciosService.getDuracion().subscribe( 
      data => {
        this.duracion = data;
      },
      error => {
        console.log(<any>error);
      }
    ); 
    
    //recibe por ruting parametro ID
    this.sub = this.route.params.subscribe(params => {
      //localStorage.removeItem('resultados');
      this.id = params['id'];
      if(!this.id){
        this.getsubCategory();
      }else{
        if(this.id === 'resultado'){
          this.resultados = JSON.parse(localStorage.getItem('resultados'));
          console.log(this.resultados);

        }else
        {
          this.id = +params['id'];// (+) converts string 'id' to a number
          this.getSubCategoryFilter();
        } 
      }
    });    

  }

  


  //get getSubCategoryFilter  
  getSubCategoryFilter(){
    this.ServiciosService.getSubCategoryFilter(this.id).subscribe( 
      data => {
        this.SubCategoryFilter = data;
      },
      error => {
        console.log(<any>error);
      }
    ); 
  }

  //get SubCategory  
  getsubCategory(){ 
    this.ServiciosService.subcategoria().subscribe( 
      data => {
        this.SubCategory = data;
      },
      error => {
        console.log(<any>error);
      }
    ); 
  }

 

}

