import { Component, OnInit, Input, Output, OnDestroy , OnChanges, SimpleChanges } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HttpClient} from "@angular/common/http";
import { ServiciosService } from '../../../services/servicios.service';
import { Observable } from 'rxjs/Rx';
import { Experience, Category, Ruta, RutaItem, ItemDetail } from '../../../models/models';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-detalle-item',
  templateUrl: './detalle-item.component.html',
  styleUrls: ['./detalle-item.component.scss'],
  providers:[ServiciosService]
})

export class DetalleItemComponent implements OnInit, OnChanges {
  itemDetail: ItemDetail[] = [];
  itemsDetails: ItemDetail[] = [];
  @Input() public idItem:any;
  url: SafeResourceUrl;
  rutaCompleta:any;
  safeURL:SafeResourceUrl;

  constructor(
    private http : HttpClient,  
    private ServiciosService: ServiciosService, 
    private router: Router, 
    private route: ActivatedRoute,
    public sanitizer:DomSanitizer) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(this.idItem != null) {
      //get experiencias  
      this.ServiciosService.getERutaItemId(this.idItem).subscribe( 
        data => {
          this.itemsDetails = [];
          this.itemsDetails.push(data.route_item_detail); 
          for(let item of data.route_item_detail){
            if(item.video_url != null){
              let rutaCompleta = item.video_url;
              let codigo = rutaCompleta.split("=");
              this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+codigo[1]);
            }
          }
        },
        error => {
          console.log(<any>error);
        } 
      );
    }  
  }
 
  ngOnInit(){

  }
   
}
