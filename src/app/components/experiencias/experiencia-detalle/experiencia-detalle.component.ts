import { Component, OnInit, Input, Output, OnDestroy  } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HttpClient} from "@angular/common/http";
import { ServiciosService } from '../../../services/servicios.service';
import { Observable } from 'rxjs/Rx';
import { Experience, Category, Ruta, RutaItem, Marker } from '../../../models/models';


@Component({
  selector: 'app-experiencia-detalle',
  templateUrl: './experiencia-detalle.component.html',
  styleUrls: ['./experiencia-detalle.component.scss'],
  providers:[ServiciosService]
})
export class ExperienciaDetalleComponent implements OnInit {

  @Input() public idExpecienciaRecibida:any;

  //Arrays Experiences and Category
  Experiences: Experience[] = [];
  rutaId: Ruta[] = [];
  experienciaDetalle: Ruta[] = [];
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
  
  idRutaItemRecibida:any;
  lat2:any;
  long2:any;
  zoom:number = 16;


  id: number;
  private sub: any;

  constructor(
    private http : HttpClient,  
    private ServiciosService: ServiciosService, 
    private router: Router, 
    private route: ActivatedRoute,
    private titleService: Title
  ) { }

  ngOnInit() {
    //title
    this.titleService.setTitle('Experiencias | Yagan');  
    //scrollTop
    window.scrollTo(0, 0);

    this.sub = this.route.params.subscribe(params => {
        this.id = +params['id']; // (+) converts string 'id' to a number
        //get getRutas  
        this.ServiciosService.getExperience().subscribe( 
          data => {
          

            this.experienciaDetalle = data.filter(r => r.id == this.id);
           
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
            console.log(this.lugar);
            
            for(let item of this.RutaItem){ 
              this.lat =  + item.latitude;
              this.lng =  + item.longitude;
              console.log(this.lat, this.lng);
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

    

  }

}
