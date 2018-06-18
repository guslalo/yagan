import { Component, OnInit,  } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { HttpClient} from "@angular/common/http";
import { ServiciosService } from '../../services/servicios.service';
import { Observable } from 'rxjs/Rx';
import { Category, subCategory } from '../../models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[ServiciosService]
})

export class HomeComponent implements OnInit {
  idExperiencia = "NULL";



  idRecibido(id){
    this.idExperiencia = id;
  }
  items=[1,2,3,4];
  //constructor
  constructor(
    private http : HttpClient,  
    private ServiciosService: ServiciosService, 
    private router: Router, 
    private titleService: Title
  ){ 
    

          
   
  }
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

  
    
  }

}
