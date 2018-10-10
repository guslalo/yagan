import { Component, OnInit, Input, Output, OnDestroy, ViewEncapsulation  } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { ServiciosService } from '../../services/servicios.service';
import { Experience, Category, Ruta, RutaItem, Marker, ItemDetail, subCategory } from '../../models/models';
import { MouseEvent } from '@agm/core';
import { InfoWindow } from '@agm/core/services/google-maps-types';

@Component({
  selector: 'app-ruta-dos',
  templateUrl: './ruta-dos.component.html',
  styleUrls: ['./ruta-dos.component.scss'],
  providers: [ServiciosService]
})
// encapsulation: ViewEncapsulation.None,
export class RutaDosComponent implements OnInit, OnDestroy  {

  @Input() public idExpecienciaRecibida: any;

  categoryActive: Category;
  imageBanner: string;
  Experiences: Experience[] = [];
  rutaId: Ruta[] = [];
  rutas: Ruta[] = [];
  RutaItemDetail: ItemDetail[] = [];
  ruta: Ruta[] = [];
  rutaName: Ruta[] = [];
  lugar: Marker[] = [];
  lat2: any;
  long2: any;
  id: number;
  private sub: any;
  Category: Category[] = [];
  RutaItem: RutaItem[] = [];
  RutaItemClick: RutaItem[] = [];
  item: any;
  subCategoryRuta: subCategory[] = [];
  regionRutaId: string;
  markers: Marker[] = [];
  public zoom = '8';
  masRutas: Category[] = [];
  allMarkers: Marker[] = [];
  // maps variables
  latitude2: number; // =  -27.360043;
  longitude2: number; // = -70.343646;
  private changeLat: number;
  private changeLng: number;
  dir = undefined;
  dir2 = undefined;
  public marcadores: any;
  public waypoints: any = [];
  public waypointsItem: any = [];
  public optimizeWaypoints: boolean;
  public renderOptions: any;
  // public markerOptions: any = {};
  public infoWindow: InfoWindow = undefined;
  public travelMode = 'WALKING';
  public titles: any = [];
  // ver mas
  public idRutaItemRecibida = null;
  public idItem = null;
  public idItem2 = null;
  public markerOptions: {
    origin: {
        icon: 'https://yagan.world/assets/img/pin.png',
    },
    destination: {
        icon: 'https://yagan.world/assets/img/pin.png',
    },
  };

  idExperiencia = 'NULL';
  idRecibido(id) {
    this.idExperiencia = id;
  }
   // constructor
   constructor(
    private http: HttpClient,
    private serviciosService: ServiciosService,
    private router: Router,
    private route: ActivatedRoute,
    private titleService: Title
  ) { }

  clickedMarker(label: string, index: number) {
    // console.log(`clicked the marker: ${label || index}`)
  }

  markerDragEnd(m: Marker, $event: MouseEvent) {
    // console.log('dragEnd', m, $event);
  }

  scrollTop() {
    window.scrollTo(0, 0);
  }

  public change(event: any) {
    this.waypoints = event.request.waypoints;
  }

  ngOnInit() {
    this.zoom = '9';
    // supress icons
    this.renderOptions = {
      suppressMarkers: false,
      markerOptions: { // effect all markers
        icon: 'https://cdn4.iconfinder.com/data/icons/6x16-free-application-icons/16/Flag.png',
    },
    };


    this.optimizeWaypoints = false;
    this.idItem2 = {};
    this.imageBanner = '';
    // title
    this.titleService.setTitle('Rutas | Yagan');
    // scrollTop
    window.scrollTo(0, 0);

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      // getRuta ID
      this.serviciosService.getRuta(this.id).subscribe(
        data => {
          this.regionRutaId = data.id;
          this.RutaItem = [];
          this.ruta = [];
          this.masRutas = [];
          this.allMarkers = [];
          this.ruta.push(data);

        // console.log(data.route_item);
         for (const item of data.route_item)  {
            item.latitude = +item.latitude;
            item.longitude = +item.longitude;
            this.latitude2 = item.latitude;
            this.longitude2 = item.longitude;

            this.waypoints.push({
              location: { lat: item.latitude, lng: item.longitude },
              stopover: true,
            });

            this.titles.push(item.title);
            console.log(this.titles);
            /* this.waypointsItem.push({
              icon: 'http://yagan.world/assets/img/pin.png',
              infoWindow: `
                <h4>HOLA ITEM<h4>
                <a href='http://www-e.ntust.edu.tw/home.php' target='_blank'>Chile Tech</a>
                `,
                label: 'Hola'
            }); */
          }

          for (let i = 0; i < data.route_item.length; i++) {
            this.RutaItem.push(data.route_item[i]);
            this.allMarkers.push(data.route_item[i]);
          }

          /*this.markerOptions = {
           waypoints: this.waypointsItem
          };*/

          this.dir = {
            origin: {
              lat: data.route_item[0].latitude,
              lng: data.route_item[0].longitude,
            },
            destination: {
              lat: data.route_item[data.route_item.length - 1 ].latitude,
              lng: data.route_item[data.route_item.length - 1 ].longitude
            },
          };
          console.log(this.dir);
          // console.log(this.waypoints);
          // console.log(this.allMarkers);

          this.serviciosService.getExperienceId(data.category).subscribe(
            d => {
              this.categoryActive = d;
              this.imageBanner = this.categoryActive.image_banner;
            }
          );

          // get getRuta misma region
          this.serviciosService.subcategoria().subscribe(
            d => {
              for (const item of d.filter(r => r.type === 'route')) {
                if (item.id !== this.regionRutaId) {
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



  captureId(id) {
    this.idRutaItemRecibida = id;
    this.idItem = id;
  }

  verMas(id) {
    this.idItem2 = id;
    // console.log(this.idItem2);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

