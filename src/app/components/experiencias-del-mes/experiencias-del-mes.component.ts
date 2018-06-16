import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { ServiciosService } from '../../services/servicios.service';
import { Observable } from 'rxjs/Rx';
import { subCategory } from '../../models/models';


@Component({
  selector: 'app-experiencias-del-mes',
  templateUrl: './experiencias-del-mes.component.html',
  styleUrls: ['./experiencias-del-mes.component.scss'],
  providers:[ServiciosService]
})
export class ExperienciasDelMesComponent implements OnInit {
  subCategory: subCategory[] = [];
  //constructor
  constructor(
    private http : HttpClient,  
    private ServiciosService: ServiciosService, 
  ){ }



 @Output()

  ngOnInit() {

      //get categorias  
      this.ServiciosService.subcategoria().subscribe( 
        data => {
          this.subCategory = data.filter(r=> r.type == 'subcategory'); 
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
