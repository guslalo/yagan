import { Component, OnInit, Input, Output, OnDestroy  } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HttpClient} from "@angular/common/http";
import { ServiciosService } from '../../services/servicios.service';
import { Observable } from 'rxjs/Rx';
import { Experience, Category, Ruta, RutaItem, Marker, ItemDetail } from '../../models/models';



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
  rutaName: Ruta[] = [];
  markers: Marker[] = [];
  lugar: Marker[] = [];
  
  Category: Category[] = [];
  RutaItem: RutaItem[] = [];
  RutaItemClick: RutaItem[] = [];
  item:any;
  
  lat: any;
  lng: any;

  latitude: any;
  longitude: any;
  

  lat2:any;
  long2:any;
  zoom:number = 16;


  id: number;
  private sub: any;/*
  markers: marker[] = [
	  {
		  lat: 51.673858,
		  lng: 7.815982,
		  label: 'A',
		  draggable: true
	  },
	  {
		  lat: 51.373858,
		  lng: 7.215982,
		  label: 'B',
		  draggable: false
	  },
	  {
		  lat: 51.723858,
		  lng: 7.895982,
		  label: 'C',
		  draggable: true
	  }
  ]*/

  itemDetail: ItemDetail[] = [];
  itemsDetails: ItemDetail[] = [];

  ngOnInit() {
    
    //title
    this.titleService.setTitle('Rutas | Yagan');  
    //scrollTop
    window.scrollTo(0, 0);

    this.sub = this.route.params.subscribe(params => {
        this.id = +params['id']; // (+) converts string 'id' to a number
        //get getRutas  
        this.ServiciosService.getRutas().subscribe( 
          data => {
          

            this.rutas = data.filter(r => r.id == this.id);
          
           
           
            //this.rutaName = data.filter(r2 => r2.name);
            //console.log(this.rutaName)

            //title
            
          },
          error => {
            console.log(<any>error);
          }
        ); 

        //get ruta item 
        this.ServiciosService.getERutaItem().subscribe( 
          data => {
            this.RutaItem = data.filter(r => r.route == this.id);
            
            this.markers = data;
           

            for(let item of this.markers){ 
              this.latitude =  + item.latitude;
              this.longitude =  + item.longitude;
              this.lugar.push(this.latitude, this.longitude);
               
            } 
              
         
            //console.log(this.lugar);
            
            for(let item of this.RutaItem){ 
              this.lat =  + item.latitude;
              this.lng =  + item.longitude;
              //console.log(this.lat, this.lng);
            } 
          },
          error => {
            console.log(<any>error);
          }
        ); 
    });

    //get experiencias  
    this.ServiciosService.getCategory().subscribe( 
      data => {
        for(let item of data){ 
          this.Experiences.push(item);
        } 
      },
      error => {
        console.log(<any>error);
      }
    );



    //get experiencias  
    this.ServiciosService.getERutaItemDetail().subscribe( 
      data => {
       
        this.itemsDetails = data
      
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
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
