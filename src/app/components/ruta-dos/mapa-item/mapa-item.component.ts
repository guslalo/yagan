import { Component, OnInit, Input , OnDestroy, OnChanges } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { ServiciosService } from '../../../services/servicios.service';
import { Observable } from 'rxjs/Rx';
import { Experience, Category, Ruta, RutaItem } from '../../../models/models';

@Component({
  selector: 'app-mapa-item',
  templateUrl: './mapa-item.component.html',
  styleUrls: ['./mapa-item.component.scss']
})
export class MapaItemComponent implements OnInit, OnDestroy, OnChanges {
  @Input() public idRutaItemRecibida:any;
  RutaItem: RutaItem[] = [];
  lat2: any;
  lng2: any;

  constructor(  private http : HttpClient,  
    private ServiciosService: ServiciosService) { }

  ngOnInit() {
       //get ruta item 
     
    
  }
 
  ngOnDestroy() {
    //this.getERutaItem.unsubscribe();
  }

  ngOnChanges() {
    this.ServiciosService.getERutaItem().subscribe( 
      data => {
       
    
      this.RutaItem = data.filter(r => r.id == this.idRutaItemRecibida);
      // console.log( data.id )
        for(let item of this.RutaItem){ 
          console.log(item.id);

          this.lat2 =  + item.latitude;
          this.lng2 =  + item.longitude;
          console.log(  this.lat2 , this.lng2 );
        } 
      },
      error => {
        console.log(<any>error);
      }
    ); 
  }

}
