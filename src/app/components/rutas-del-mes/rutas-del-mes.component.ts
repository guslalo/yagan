import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { HttpClient} from "@angular/common/http";
import { ServiciosService } from '../../services/servicios.service';
import { Observable } from 'rxjs/Rx';
import { Experience, Category, Ruta, RutaItem } from '../../models/models';

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
Experiences: Experience[] = [];
rutaId: Ruta[] = [];
rutas: Ruta[] = [];
Category: Category[] = [];
RutaItem: RutaItem[] = [];
RutaItemClick: RutaItem[] = [];
item:any;


  ngOnInit() {

    //get experiencias  
    this.ServiciosService.getRutas().subscribe( 
      data => {
        //console.log(data);
        this.rutas = data
        //console.log(this.rutas);
        for(let item of this.rutaId){ 
         // this.lat =  + item.latitude;
          //this.lng =  + item.longitude;
        } 
      },
      error => {
        console.log(<any>error);
      }
    ); 
  }

  public idCategory = null;

  @Output() idCategoryOutput = new EventEmitter();
 
  captureId(id){
    this.idCategory = id;
     this.idCategoryOutput.emit(this.idCategory);
     console.log("categoria", this.idCategory);
   }
 

}
