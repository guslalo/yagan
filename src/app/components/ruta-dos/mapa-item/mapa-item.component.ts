import { Component, OnInit, Input , OnDestroy, OnChanges } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { ServiciosService } from '../../../services/servicios.service';
import { Observable } from 'rxjs/Rx';
import { Experience, Category, Ruta, RutaItem, Marker } from '../../../models/models';

@Component({
  selector: 'app-mapa-item',
  templateUrl: './mapa-item.component.html',
  styleUrls: ['./mapa-item.component.scss']
})
export class MapaItemComponent implements OnInit, OnDestroy, OnChanges {
  
  @Input() public rutaItemSelected: RutaItem;
  RutaItem: RutaItem[] = [];
  MarkersArray: Marker[] = [];
  lat2 = 47.024629;
  lng2 = 28.832407;
  zoom: number = 14;
  icon: any;
  title: any;
  
  public currentLocation: {
    latitude: 47.024629,
    longitude: 28.832407
  };

  constructor(  private http : HttpClient, private ServiciosService: ServiciosService) { }

  ngOnInit() {
       //get ruta item 
       this.icon = '';
       this.title = '';
  }
 
  ngOnDestroy() {
    //this.getERutaItem.unsubscribe();
  }

  ngOnChanges() {

    this.zoom = 14;
    
    if(this.rutaItemSelected){
      // console.log(this.rutaItemSelected);
      this.lat2 =  + this.rutaItemSelected.latitude;
      this.lng2 =  + this.rutaItemSelected.longitude;
      this.icon = this.rutaItemSelected.image;
      this.title = this.rutaItemSelected.title;
      // console.log('Title: ' + this.rutaItemSelected.title);
    }
  }

}
