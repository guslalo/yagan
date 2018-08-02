import { Component, OnInit, Input, Output, OnDestroy  } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HttpClient} from "@angular/common/http";
import { ServiciosService } from '../../services/servicios.service';
import { Observable } from 'rxjs/Rx';
import { Experience, Category, Ruta, RutaItem, Marker, ItemDetail, subCategory } from '../../models/models';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-ruta-dos',
  templateUrl: './ruta-dos.component.html',
  styleUrls: ['./ruta-dos.component.scss'],
  providers:[ServiciosService]
})
export class RutaDosComponent implements OnInit, OnDestroy  {

  @Input() public idExpecienciaRecibida:any;

  idExperiencia = "NULL"
  idRecibido(id){
    this.idExperiencia = id;
  }

   //constructor
   constructor(
    private http : HttpClient,  
    private ServiciosService: ServiciosService, 
    private router: Router, 
    private route: ActivatedRoute,
    private titleService: Title
  ){ }

  //Arrays Experiences and Category
  Experiences: Experience[] = [];
  rutaId: Ruta[] = [];
  rutas: Ruta[] = [];
  RutaItemDetail: ItemDetail[] = [];

  ruta: Ruta[] = [];
  rutaName: Ruta[] = [];

  lugar: Marker[] = [];

  lat2:any;
  long2:any;

  id: number;
  private sub: any;
  
  Category: Category[] = [];
  RutaItem: RutaItem[] = [];
  RutaItemClick: RutaItem[] = [];
  item:any;
  subCategoryRuta: subCategory[] = [];

  regionRutaId:string;
  
  //markers:any;
  markers: Marker[] = [];
  /*markers: Marker[] = [
  	  {
		  latitude: -27.360043,
		  longitude: -70.343646,
		  label: 'A',
		  draggable: true
	  },
	  {
		  latitude: -27.361572,
		  longitude: -70.344672,
		  label: 'C',
		  draggable: true
    }]*/

  //google maps zoom level
  zoom: number = 8;
  
  ap


  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
 
  markerDragEnd(m: Marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
 
  /*
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }*/

  //url:string = 'ruta/';
  masRutas: Category[] = [];
  allMarkers: Marker[] = [];

  scrollTop(){
    window.scrollTo(0, 0);
  }
  
  
  // initial center position for the m

  
  latitude2: number; //=  -27.360043;
  longitude2: number;// = -70.343646;

  private changeLat: number;
  private changeLng: number;

  ngOnInit() {  
    //console.log(this.markers);
    //title
    this.titleService.setTitle('Rutas | Yagan');  
    //scrollTop
    window.scrollTo(0, 0);
    
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      //getRuta ID
      this.ServiciosService.getRuta(this.id).subscribe( 
        data => { 
          this.regionRutaId = data.id;    
          this.RutaItem = [];
          this.ruta = [];
          this.masRutas = [];
          this.allMarkers = [];

          this.ruta.push(data);
          
          for(let item of data.route_item)  {
            item.latitude = +item.latitude
            item.longitude = +item.longitude

            this.latitude2= item.latitude
            this.longitude2= item.longitude
            //this.markers = data;
            this.RutaItem.push(item);
            this.allMarkers.push(item);
             
          }   
          //console.log(this.allMarkers);    
          //get getRuta misma region  
          this.ServiciosService.subcategoria().subscribe( 
            data => {
              for(let item of data.filter(r=> r.type == 'route')){
                if(item.id != this.regionRutaId ){
                  //this.router.navigate([url]);   
                  this.masRutas.push(item);
                  this.scrollTop();  
                }
              }
            },
            error => {
              console.log(<any>error);
            }
          );  
        },
        error => {
          console.log(<any>error);
        }
      ); 
    });
  }

/*
  centerChange(event: any) {
    if (event) {
      this.changeLat = event.lat;
      this.changeLng = event.lng;
    }
  }*/
  public idRutaItemRecibida = null;
  public idItem = null;
  public idItem2 = null;
  captureId(id){
    this.idRutaItemRecibida = id;
    this.idItem = id;
    /*this.idCategoryOutput.emit(this.idCategory);*/
    //console.log("ruta item", id);
  }
  verMas(id){ 
    this.idItem2 = id;
    //console.log(this.idItem2);
  }
  

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  
}

