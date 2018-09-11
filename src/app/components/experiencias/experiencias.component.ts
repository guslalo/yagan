

import { Component, OnInit, OnChanges, Output, Input, EventEmitter, DoCheck, SimpleChanges  } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { HttpClient} from "@angular/common/http";
import { ServiciosService } from '../../services/servicios.service';
import { Category, Region, Duracion,subCategory } from '../../models/models';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.scss'],
  providers:[ServiciosService, StorageService]
})

export class ExperienciasComponent implements OnInit, OnChanges {

 Category: Category[] = [];
 SubCategory: Category[] = [];
 SubCategoryFilter: Category[] = [];
 CategoryFilter: Category[] = [];
 region: Region[] = [];
 duracion: Duracion[] = [];
 public resultados:subCategory;

 public query = '';
 localStorage:any;

 id: any;
 private sub: any;
 mensaje: string = 'Este es el experiencias';
 saludo(value) {
   this.mensaje = value;
 }

constructor( private http : HttpClient,  
  private ServiciosService: ServiciosService,
  private storageService: StorageService, 
  private router: Router, 
  private titleService: Title,  
  private route: ActivatedRoute) {  }

//@Input(JSON.parse(localStorage.getItem('buscador'))) busqueda: any;


//changes: SimpleChanges

  ngOnChanges(){
    console.log(this.storageService.getBusqueda());
    console.log(JSON.parse(localStorage.getItem('resultados')));

    /*if (changes['busqueda']) {
     
    }/*

    this.ServiciosService.buscarExperiencia(JSON.parse(localStorage.getItem('buscador')).buscar).subscribe( 
      data => {
        this.resultados = data;
        //localStorage.setItem('resultados', JSON.stringify(this.resultados));
        //console.log(JSON.parse(localStorage.getItem('resultados')));
      },
      error => {
        console.log(<any>error);
      }
    );
   
    
    /*this.resultados = JSON.parse(localStorage.getItem('resultados'));
    this.query = JSON.parse(localStorage.getItem('buscador')).buscar;
    this.ServiciosService.buscarExperiencia(this.query).subscribe( 
      data => {
        this.resultados = data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
        //console.log(JSON.parse(localStorage.getItem('resultados')));
      },
      error => {
        console.log(<any>error);
      }
    );/**/
  }



 
  buscarExperiencia2(){
    
  }


  ngAfterViewInit(){
    $("#btnbuscar").click(function(){
      console.log("boton buscar click");
      //console.log(JSON.parse(localStorage.getItem('resultados')));
      //location.reload();
     
   });

  }

  ngOnInit() {

    this.titleService.setTitle('Rutas y experiencias | Yagan');
    
    $(".menusidebar .sidebarMobile").click(function(){
      $(".menusidebar").find("form").slideToggle();
    })
    window.scrollTo(0, 0);

    // get service
    this.route.params.subscribe(params => {

      let paramSearch : string;
      paramSearch = "?";
      if(params['cid']){
          paramSearch += "category_parent=" + params['cid'];
      }
      
      if(params['q']){
          paramSearch += "string_text=" + params['q'];
      }

      this.ServiciosService.searchDefault(paramSearch).subscribe( 
        data => {
          this.resultados = data;
        },
        error => {
          console.log(<any>error);
        }
      ); 

      /*this.id = params['id'];
      if(!this.id){
        this.getsubCategory();
      }else{
        
        {
          this.id = +params['id'];// (+) converts string 'id' to a number
          this.getSubCategoryFilter();
        } 
      }*/

    });

    
    //console.log(this.route.snapshot.queryParams["q"]);
    /*this.localStorage.getItem('buscador').subscribe( data => { 
      //return data;
      console.log(data);
    
     });*/

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


    /**/
    
    //recibe por ruting parametro ID
    /*this.sub = this.route.params.subscribe(params => {
      //localStorage.removeItem('resultados');
      this.id = params['id'];
      if(!this.id){
        this.getsubCategory();
      }else{
        if(this.id === 'resultado'){
          this.resultados = JSON.parse(localStorage.getItem('resultados'));
          this.query = JSON.parse(localStorage.getItem('buscador')).buscar;
          console.log(this.resultados);

          this.ServiciosService.buscarExperiencia(this.query).subscribe( 
            data => {
              this.resultados = data;
              localStorage.setItem('resultados', JSON.stringify(this.resultados));
              //console.log(JSON.parse(localStorage.getItem('resultados')));
            },
            error => {
              console.log(<any>error);
            }
          );

        }else
        {
          this.id = +params['id'];// (+) converts string 'id' to a number
          this.getSubCategoryFilter();
        } 
      }
    });    */

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

