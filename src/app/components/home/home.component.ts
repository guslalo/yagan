import { Component, OnInit,  } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { HttpClient} from "@angular/common/http";
import { ServiciosService } from '../../services/servicios.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Category, subCategory } from '../../models/models';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[ServiciosService]
})

export class HomeComponent implements OnInit {
  public idExperiencia = "NULL";
  public slide:any;
  public slideHome:any;
  public safeURL:SafeResourceUrl;

  idRecibido(id){
    this.idExperiencia = id;
  }
  items=[1,2,3,4];
  //constructor
  constructor(
    private http : HttpClient,  
    private ServiciosService: ServiciosService, 
    private router: Router, 
    private titleService: Title,
    public sanitizer:DomSanitizer
  ){}



  onItemSelect(carouselItem:any):void{
  }
  //Arrays Experiences and Category
  subCategory: subCategory[] = [];
  Category: Category[] = [];
  CategoryFilter: Category[] = [];



  
  ngOnInit() {
   

    //scrollTop
    window.scrollTo(0, 0);

    //title
    this.titleService.setTitle('Descubre experiencias y vive tu propio Chile | Yagan');
   
    //get categorias  
    this.ServiciosService.getCategory().subscribe( 
      data => {
        this.CategoryFilter = data.filter(r => r.category_parent == null);
      },
      error => {
        console.log(<any>error);
      }
    ); 

    //get categorias  
    this.ServiciosService.subcategoria().subscribe( 
      data => {
        this.subCategory = data;
      },
      error => {
        console.log(<any>error);
      }
    ); 

    

    //get categorias  
    this.ServiciosService.getSlide().subscribe( 
      data => {
        
        let slideGeneral =  data;
        this.slide = slideGeneral.filter(r => r.name == "SlideHome");
        for(let item of this.slide){
          this.slideHome = item.banner_set;
          //console.log(this.slideHome);
          for(let item2 of  this.slideHome){
            if(item2.url_video != null){
              let rutaCompleta = item2.url_video;
              let codigo = rutaCompleta.split("=");
              //console.log(codigo[1]);
              this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+codigo[1]+'?modestbranding=1&rel=0&autoplay=1&controls=1&mute=1&enablejsapi=1&showinfo=0&iv_load_policy=3&cc_load_policy=0&fs=0&autohide=0');
            }
          }
        }
      },
      error => {
        console.log(<any>error);
      }
    ); 

  
    
  }

}
