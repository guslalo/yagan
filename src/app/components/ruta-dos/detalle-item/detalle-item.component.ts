import { Component, OnInit, Input, Output, OnDestroy , OnChanges, SimpleChanges, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HttpClient} from "@angular/common/http";
import { ServiciosService } from '../../../services/servicios.service';
import { Observable } from 'rxjs/Rx';
import { Experience, Category, Ruta, RutaItem, ItemDetail } from '../../../models/models';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { delay } from 'q';


@Component({
  selector: 'app-detalle-item',
  templateUrl: './detalle-item.component.html',
  styleUrls: ['./detalle-item.component.scss'],
  providers:[ServiciosService]
})

export class DetalleItemComponent implements OnInit, OnChanges {
  itemDetail: ItemDetail[] = [];
  public itemsDetails: ItemDetail[] = [];
  @Input() public rutaItemSelected: RutaItem;
  public url: SafeResourceUrl;
  public rutaCompleta:any;

  constructor(
    public sanitizer:DomSanitizer) {
  }

   ngOnChanges(changes: SimpleChanges) {

    //console.log(this.rutaItemSelected);
    if(this.rutaItemSelected){
      //console.log(this.rutaItemSelected.route_item_detail);
      this.itemsDetails = this.rutaItemSelected.route_item_detail;
    }
    //this.itemsDetails = this.rutaItemSelected.route_item_detail;
    // delay(300);
    //await delay(1000);
  
      // Do something after
      let cont = 0;
      try {
        for(let item of this.itemsDetails){
          if(item.video_url != null){
            let rutaCompleta = item.video_url;
            let code_array = [];
            let code_string = '';
            if(item.video_url.indexOf('?v=') == -1 ){
              code_array = rutaCompleta.split("/");
              code_string = (code_array.length >  0)? code_array[code_array.length - 1] : '';
            }
            else{
              code_array = rutaCompleta.split("=");
              code_string = code_array[1];
            }
            let safeURL:SafeResourceUrl;
            safeURL = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+ code_string);
            this.itemsDetails[cont].videoSafeURL = safeURL;
          }
          cont++;
        }
      }
      catch(err) {
          console.log('Error: ', err.message);
      }

      
 
  }
 
  async ngOnInit(){
    await delay(1000);
  }
   
}
