import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { ServiciosService } from '../../services/servicios.service';
import { Observable } from 'rxjs/Rx';
import { Experience } from '../../models/models';


@Component({
  selector: 'app-experiencias-del-mes',
  templateUrl: './experiencias-del-mes.component.html',
  styleUrls: ['./experiencias-del-mes.component.scss'],
  providers:[ServiciosService]
})
export class ExperienciasDelMesComponent implements OnInit {

  //constructor
  constructor(
    private http : HttpClient,  
    private ServiciosService: ServiciosService, 
  ){ }

  //Arrays Experiences and Category
  Experiences: Experience[] = [];

 @Output()

  ngOnInit() {
    //scrollTop
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
    
  }

  
  public idCategory = null;

  @Output() idCategoryOutput = new EventEmitter();
 
  captureId(id){
   this.idCategory = id;
    this.idCategoryOutput.emit(this.idCategory);
    console.log("categoria", this.idCategory);
  }


}
