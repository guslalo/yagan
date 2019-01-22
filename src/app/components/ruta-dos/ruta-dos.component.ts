import { Component, OnInit, Input, Output, OnDestroy, ViewEncapsulation, ViewChild  } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { ServiciosService } from '../../services/servicios.service';
import { Experience, Category, Ruta, RutaItem, Marker, ItemMarker, ItemDetail, subCategory } from '../../models/models';
import { MouseEvent } from '@agm/core';
import { InfoWindow } from '@agm/core/services/google-maps-types';
import { LatLngBounds } from '@agm/core';
import { mapTo } from 'rxjs-compat/operator/mapTo';
import { TouchSequence } from 'selenium-webdriver';
import {OwlCarousel} from 'ngx-owl-carousel';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

 declare var google: any;
 

@Component({
  selector: 'app-ruta-dos',
  templateUrl: './ruta-dos.component.html',
  styleUrls: ['./ruta-dos.component.scss'],
  providers: [ServiciosService]
})


// encapsulation: ViewEncapsulation.None,
export class RutaDosComponent implements OnInit, OnDestroy  {
  @ViewChild('owlElement') owlElement: OwlCarousel
  @Input() public idExpecienciaRecibida: any;

  categoryActive: Category;
  public imageBanner = '';
  Experiences: Experience[] = [];
  rutaId: Ruta[] = [];
  rutas: Ruta[] = [];
  RutaItemDetail: ItemDetail[] = [];
  ruta: Ruta;
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
  // public zoom = 15;
  masRutas = [];
  allMarkers: ItemMarker[] = [];
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
  public rutaItemSelected: RutaItem;
  public idItem = null;
  public idItem2 = null;
  public zoom = 12;
  public pageId: any;

  public showButton = false;
  public statusAgmDirection = false;
  public hrefSafeURL:SafeResourceUrl;

  idExperiencia = 'NULL';
  idRecibido(id) {
    this.idExperiencia = id;
  }
   // constructor
   constructor(
    public sanitizer:DomSanitizer,
    private http: HttpClient,
    private serviciosService: ServiciosService,
    private router: Router,
    private route: ActivatedRoute,
    private titleService: Title
  ) { }

  // clickedMarker(label: string, index: number) {
  //   // console.log(`clicked the marker: ${label || index}`)
  // }

  // markerDragEnd(m: Marker, $event: MouseEvent) {
  //   // console.log('dragEnd', m, $event);
  // }

  scrollTop() {
    window.scrollTo(0, 0);
  }
  scrollToVh() {
    window.scrollTo(100, 0);
  }

  clickMarker(data){
    console.log('clickMarker');
    console.log(data);
    this.owlElement.to([data])
  }

  goMapNative(data){
    console.log('goMapNative');
    console.log(data);
  }

  public change(event: any) {
    this.waypoints = event.request.waypoints;
  }

  // tslint:disable-next-line:use-life-cycle-interface
  // onMapReady(map) {
  //      console.log('onMapReady');
  //     // console.log(map);
  //     const bounds: LatLngBounds = new google.maps.LatLngBounds();
  //     for (const mm of this.allMarkers) {
  //       // console.log('subscribe for');
  //       bounds.extend(new google.maps.LatLng(mm.latitude, mm.longitude));
  //     }
  //     // console.log(bounds);
  //     map.fitBounds(bounds);
  //     map.panToBounds(bounds);
  //     // map.zoom = 15;
  //     // console.log('Zoom: ' + map.zoom);
  // }

  mapClicked(map){
    console.log('mapClicked');
  }

  zoomin(){
    console.log("zoomin");
    this.statusAgmDirection = false;
    
    setTimeout(() => 
    {
      this.statusAgmDirection = true;
    },
    500);
  }

  protected mapLoad(map){
    console.log('mapLoad');
    //this.zoomin();
  }

  ngOnInit() {
    // supress icons
    //this.pageId = this.id;
    this.renderOptions = {
      suppressMarkers: false,
      markerOptions: { // effect all markers
        icon: 'https://cdn4.iconfinder.com/data/icons/6x16-free-application-icons/16/Flag.png',
      },
    };

    this.optimizeWaypoints = false;
    this.idItem2 = {};
    this.imageBanner = '';
    this.statusAgmDirection = false;
    this.zoom = 10;
    // title
    this.titleService.setTitle('Rutas | Yagan');
    // scrollTop
    window.scrollTo(0, 0);

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      // getRuta ID
      this.ruta = new Ruta;
      this.serviciosService.getRuta(this.id).subscribe(
        data => {
          this.pageId = '/route/'+data.id;
          console.log(this.pageId);
          this.regionRutaId = data.id;
          this.RutaItem = [];
          this.allMarkers = [];
          this.waypoints = [];
          this.ruta = data;
          this.showButton = false;
          if(this.ruta.text_button){
            if(this.ruta.text_button.toString().trim()){
              this.showButton = true;
            }
          }

         for (const item of data.route_item)  {

          
            let href_native = 'geo:0,0?q=' + item.latitude + ',' + item.longitude + '(' + item.title + ')';
            this.hrefSafeURL = this.sanitizer.bypassSecurityTrustResourceUrl(href_native);
            item.gps = this.hrefSafeURL
            this.RutaItem.push(item);
            this.waypoints.push({
              location: { lat: +item.latitude, lng: +item.longitude },
              stopover: true,
            });

            const maker = new ItemMarker;
            maker.latitude = +item.latitude;
            maker.longitude = +item.longitude;
            maker.icon = item.image;
            maker.draggable = false;
            maker.title = item.title;

            this.allMarkers.push(maker);
          }

          console.log(this.waypoints);

          const origin_lat = +data.route_item[0].latitude;
          const origin_lng = +data.route_item[0].longitude;
          const destination_lat = +data.route_item[+data.route_item.length - 1 ].latitude;
          const destination_lng = +data.route_item[+data.route_item.length - 1 ].longitude;

          this.dir = {
            origin: {
              lat: origin_lat,
              lng: origin_lng,
            },
            destination: {
              lat: destination_lat,
              lng: destination_lng
            },
          };

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

  captureId(item) {
    this.rutaItemSelected = item;
    //console.log(this.rutaItemSelected );
    // this.idItem = id;
  }

  verMas(id) {
    this.idItem2 = id;
    // console.log(this.idItem2);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

