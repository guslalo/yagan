import { Component, OnInit, Input, Output, OnDestroy , OnChanges, DoCheck, SimpleChanges } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HttpClient} from "@angular/common/http";
import { ServiciosService } from '../../../services/servicios.service';
import { Observable } from 'rxjs/Rx';
import { Experience, Category, Ruta, RutaItem, ItemDetail } from '../../../models/models';
import { FormsModule } from '@angular/forms';

//import * as owlCarousel from 'owl.carousel2';

declare var owlCarousel:any;

@Component({
  selector: 'app-detalle-item',
  templateUrl: './detalle-item.component.html',
  styleUrls: ['./detalle-item.component.scss'],
  providers:[ServiciosService]
})
export class DetalleItemComponent implements OnInit, OnChanges, DoCheck {
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
      console.log(changes);
        if(this.idItem != null) {
           //get experiencias  
            this.ServiciosService.getERutaItemId(this.idItem).subscribe( 
              data => {
                this.itemsDetails = [];
                this.itemsDetails.push(data.route_item_detail); 
            
                //console.log(this.itemsDetails);
                console.log(this.itemsDetails);
               
                this.setTime();
              },
              error => {
                console.log(<any>error);
              } 
            );
        }
       
    }
    ngDoCheck(){

    }

   ngOnInit(){
    
   }
   carrusel(){
   
   }
 

 	 setTime(){
    setTimeout(function(){  
  
     
    },550);
  }
   
}
