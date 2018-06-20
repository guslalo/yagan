import { Component, OnInit, Input, Output, OnDestroy , OnChanges, SimpleChanges } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HttpClient} from "@angular/common/http";
import { ServiciosService } from '../../../services/servicios.service';
import { Observable } from 'rxjs/Rx';
import { Experience, Category, Ruta, RutaItem, ItemDetail } from '../../../models/models';
import { FormsModule } from '@angular/forms';


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

  constructor(
    private http : HttpClient,  
    private ServiciosService: ServiciosService, 
    private router: Router, 
    private route: ActivatedRoute) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(this.idItem != null) {
      //get experiencias  
      this.ServiciosService.getERutaItemId(this.idItem).subscribe( 
        data => {
          this.itemsDetails = [];
          this.itemsDetails.push(data.route_item_detail); 
          //console.log(this.itemsDetails);
          console.log(this.itemsDetails);
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
