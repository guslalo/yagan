import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { HttpClient} from "@angular/common/http";
import { ServiciosService } from '../../services/servicios.service';
import { Observable } from 'rxjs/Rx';
import { subCategory } from '../../models/models';

@Component({
  selector: 'app-rutas-del-mes',
  templateUrl: './rutas-del-mes.component.html',
  styleUrls: ['./rutas-del-mes.component.scss']
})
export class RutasDelMesComponent implements OnInit {

 //constructor
 constructor(
  private http : HttpClient,  
  private ServiciosService: ServiciosService, 
  private router: Router, 
  private titleService: Title
){ }

//Arrays Experiences and Category
subCategoryRuta: subCategory[] = [];




  ngOnInit() {

     //get categorias  
     this.ServiciosService.subcategoria().subscribe( 
      data => {
        this.subCategoryRuta = data.filter(r=> r.type == 'route');     
      },
      error => {
        console.log(<any>error);
      }
    ); 

  }



}
