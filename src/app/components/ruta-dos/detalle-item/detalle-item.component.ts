import { Component, OnInit, Input, Output, OnDestroy  } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HttpClient} from "@angular/common/http";
import { ServiciosService } from '../../../services/servicios.service';
import { Observable } from 'rxjs/Rx';
import { Experience, Category, Ruta, RutaItem, ItemDetail } from '../../../models/models';


@Component({
  selector: 'app-detalle-item',
  templateUrl: './detalle-item.component.html',
  styleUrls: ['./detalle-item.component.scss'],
  providers:[ServiciosService]
})
export class DetalleItemComponent implements OnInit {
  itemDetail: ItemDetail[] = [];
  itemsDetails: ItemDetail[] = [];
  @Input() public idItem:any;

  constructor(
    private http : HttpClient,  
    private ServiciosService: ServiciosService, 
    private router: Router, 
    private route: ActivatedRoute) { }

   
  ngOnInit() {
       //get experiencias  
       this.ServiciosService.getERutaItemDetail().subscribe( 
        data => {
         
          this.itemsDetails = data.filter(r => r.id == this.idItem);
          //console.log(this.itemsDetails);
          // console.log( data.id )
           /* for(let item of this.itemsDetails){ 
              //console.log(item.id);
             
            } */
         /* if(data.route_item == this.idItem ){
         
            console.log(data.route_item);
          }*/
         // this.itemsDetails = data.filter(r => r.route_item);

         /* for(let item of data){
            console.log(item.name);
              if(item.id == this.idItem ){
                this.itemsDetails = item;
                console.log(this.itemsDetails);
              }
          }*/
         
          //this.itemDetail = data.filter(r => r.id == this.idItem);
          
          
         // console.log(this.itemDetail);
        },
        error => {
          console.log(<any>error);
        } 
      );
  }

}
