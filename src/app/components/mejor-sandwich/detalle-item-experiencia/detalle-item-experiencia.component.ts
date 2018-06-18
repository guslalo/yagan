import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ServiciosService } from '../../../services/servicios.service';
import { HttpClient} from "@angular/common/http";
import { Experience, Category, Ruta, RutaItem, ItemDetail } from '../../../models/models';

@Component({
  selector: 'app-detalle-item-experiencia',
  templateUrl: './detalle-item-experiencia.component.html',
  styleUrls: ['./detalle-item-experiencia.component.scss'],
  providers:[ServiciosService]
})
export class DetalleItemExperienciaComponent implements OnInit, OnChanges {
  @Input() public idItem:any;

  itemDetail: ItemDetail[] = [];
  constructor(    private http : HttpClient,  
    private ServiciosService: ServiciosService, ) { }

  ngOnInit() {
  }

  ngOnChanges() {
      if(this.idItem != null) {
         //get experiencias  
          this.ServiciosService.getExperienceModal(this.idItem).subscribe( 
            data => {
              this.itemDetail = [];
              this.itemDetail.push(data); 
             console.log(this.itemDetail);
            },
            error => {
              console.log(<any>error);
            } 
          );
      }
     
  }

}
