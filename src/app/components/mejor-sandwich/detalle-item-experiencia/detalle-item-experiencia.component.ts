import { Component, OnInit, Input, OnChanges, NgModule } from '@angular/core';
import { ServiciosService } from '../../../services/servicios.service';
import { HttpClient, HttpParams} from "@angular/common/http";
import { ItemDetail } from '../../../models/models';
import { ToastrManager, ToastrModule } from 'ng6-toastr-notifications'

@Component({
  selector: 'app-detalle-item-experiencia',
  templateUrl: './detalle-item-experiencia.component.html',
  styleUrls: ['./detalle-item-experiencia.component.scss'],
  providers:[ServiciosService]
})
export class DetalleItemExperienciaComponent implements OnInit, OnChanges {
  @Input() public idItem:any;

  itemDetail: ItemDetail[] = [];
  constructor(private http : HttpClient,  
              private ServiciosService: ServiciosService,
              public toastr: ToastrManager ) { }

  ngOnInit() {
  }

  updateRate(id, event){
    
    const httpBody = new HttpParams()
      .set('experience', id)
      .set('value', event);
    this.ServiciosService.setValoration(httpBody).subscribe( 
      data => {
        if(data.status === 'OK'){
          this.toastr.successToastr(data.msg, 'Valoración satisfactoria.')
        }else if(data.status === 'NOK'){
          this.toastr.warningToastr(data.msg, 'Valoración interrumpida.')
        }else{
          this.toastr.errorToastr(data.msg, 'Valoración interrumpida.')
        }
        // console.log(data);
      },
      error => {
        // console.log(<any>error);
        this.toastr.errorToastr('Inténtalo mas tarde', 'Valoración interrumpida.')
      } 
    );
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
