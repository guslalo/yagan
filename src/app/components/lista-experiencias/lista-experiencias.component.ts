import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { ServiciosService } from '../../services/servicios.service';
import { Experience } from '../../models/models';

@Component({
  selector: 'app-lista-experiencias',
  templateUrl: './lista-experiencias.component.html',
  styleUrls: ['./lista-experiencias.component.scss'],
  providers:[ServiciosService]
})
export class ListaExperienciasComponent implements OnInit {

 //Arrays Experiences and Category
 Experiences: Experience[] = [];

  constructor( private http : HttpClient,  private ServiciosService: ServiciosService, ) {  }

  //public idCategoriaRecibido = "test";
  @Input() idCategoriaRecibido:string;

  ngOnInit() {
    
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
  }

  public idFinal = 'Iniciar';
  idRecibido(id){
    this.idFinal = id;
  }

}
