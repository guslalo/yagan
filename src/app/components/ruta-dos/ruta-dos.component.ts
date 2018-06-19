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
  
  /*lat: any;
  lng: any;
    zoom:number = 16;
  */

  /*latitude: any;
  longitude: any;*/
  
  //markers:any;
  
  // google maps zoom level
  zoom: number = 11;
  
  // initial center position for the map
  lat: number =  -27.360043;
  lng: number = -70.343646;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
 /* 
  */
  markerDragEnd(m: Marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  //markers: Marker[] = [];
    markers: Marker[] = [
	{
		  lat: -27.360043,
		  lng: -70.343646,
		  label: 'A',
		  draggable: true
	  },
	  {
		  lat: -27.361828,
		  lng: -70.340268,
		  label: 'B',
		  draggable: false
	  },
	  {
		  lat: -27.361572,
		  lng: -70.344672,
		  label: 'C',
		  draggable: true
	  }
  ]/**/
  /*
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }*/
   url:string = 'ruta/';
  masRutas: Category[] = [];
  scrollTop(){
    window.scrollTo(0, 0);
  }
  ngOnInit() {
    
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

              this.ruta.push(data);
              
              for(let item of data.route_item)  {
                //this.markers = data;
                this.RutaItem.push(item); 
              }   

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
                 //this.router.navigate([this.url]);
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
  
  public idRutaItemRecibida = null;
  public idItem = null;
  captureId(id){
    this.idRutaItemRecibida = id;
    this.idItem = id;
    /*this.idCategoryOutput.emit(this.idCategory);*/
    console.log("ruta item", id);
  }

  //funcion para acceder al dom despues de mostrar data
  setTime(data){
    setTimeout(function(){  
      //$(".owl-carousel").owlCarousel(); 
    },0);

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  
}

