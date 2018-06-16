import { Component, OnInit, Input, Output, OnDestroy , OnChanges, DoCheck, SimpleChanges } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HttpClient} from "@angular/common/http";
import { ServiciosService } from '../../../services/servicios.service';
import { Observable } from 'rxjs/Rx';
import { Experience, Category, Ruta, RutaItem, ItemDetail } from '../../../models/models';
import { FormsModule } from '@angular/forms';

import { CarouselOptions, ScreenResolutionMap, MergefitMap    } from 'ng2-owl-carousel2';
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

  carouselOptions: CarouselOptions;  
  ScreenResolutionMap : ScreenResolutionMap;
  SimpleChanges:any;

  constructor(
    private http : HttpClient,  
    private ServiciosService: ServiciosService, 
    private router: Router, 
    private route: ActivatedRoute) {

      this.carouselOptions = new CarouselOptions();

    //first parameter of the constructor is the resolution of the screen and second one is to enable or disable Merge fit option
    let mappings: Array<MergefitMap> =[
      new MergefitMap(678, true),
      new MergefitMap(500, true)
    ] ;
  /*
    this.carouselOptions.enableMouseScroll(true)
                        .mergeFit(mappings);*/
      
   
      this.carouselOptions.enableMouseScroll(true)
                         

     }
     onItemSelect(carouselItem:any):void{
      //this carousel item can be used anywhere
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
