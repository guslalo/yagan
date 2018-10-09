

import { Component, OnInit, OnChanges, Output, Input, EventEmitter, DoCheck, SimpleChanges  } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { HttpClient} from '@angular/common/http';
import { ServiciosService } from '../../services/servicios.service';
import { Category, Region, Duracion, subCategory } from '../../models/models';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.scss'],
  providers: [ServiciosService, StorageService]
})

export class ExperienciasComponent implements OnInit, OnChanges {

 Category: Category[] = [];
 SubCategory: Category[] = [];
 SubCategoryFilter: Category[] = [];
 CategoryFilter: Category[] = [];
 region: Region[] = [];
 duracion: Duracion[] = [];
 public resultados: subCategory;

 public query = '';
 localStorage: any;

 idCategoryActive: number;
 public categoryActive: Category;
 public banner: string;

 id: any;
 private sub: any;
 mensaje: string;
 saludo(value) {
   this.mensaje = value;
 }

constructor( private http: HttpClient,
  private serviciosService: ServiciosService,
  private storageService: StorageService,
  private router: Router,
  private titleService: Title,
  private route: ActivatedRoute) {  }

// @Input(JSON.parse(localStorage.getItem('buscador'))) busqueda: any;

  ngOnChanges() {
    console.log(this.storageService.getBusqueda());
    console.log(JSON.parse(localStorage.getItem('resultados')));
  }

  ngOnInit() {
    this.mensaje = 'Este es el experiencias';
    this.banner = 'assets/img/cores/experiencias.png';
    this.titleService.setTitle('Rutas y experiencias | Yagan');
    $('.menusidebar .sidebarMobile').click(function() {
      $('.menusidebar').find('form').slideToggle();
    });
    window.scrollTo(0, 0);

    // get service
    this.route.params.subscribe(params => {
      let paramSearch: string;
      let q: string;
      let cid: string;
      let rg: string;
      let dc: string;

      // q = (localStorage.getItem('q')=='') ? params['q'] : localStorage.getItem('q');
      // cid = (localStorage.getItem('cid')=='') ? params['cid'] : localStorage.getItem('q');

      q =  (params['q']) ? params['q'] : '';
      cid = (params['cid']) ? params['cid'] : '';
      rg = (params['rg']) ? params['rg'] : '';
      dc = (params['dc']) ? params['dc'] : '';

      paramSearch = '?';

      this.idCategoryActive = +cid,

      console.log('q =>' + q);
      if (q !== '') {
        paramSearch += 'string_text=' + q;
      } else {
        if (cid !== '') {
          paramSearch += 'category_parent=' + cid;
        }
        if (rg !== '') {
          paramSearch += 'region=' + rg;
        }
        if (dc !== '') {
          paramSearch += 'duration=' + dc;
        }
      }
      console.log(paramSearch);
      this.serviciosService.searchDefault(paramSearch).subscribe(
        data => {
          this.resultados = data;
          console.log(data);
        },
        error => {
          console.log(<any>error);
        }
      );
    });

    // get categorias
    this.serviciosService.getCategory().subscribe(
      data => {
        this.CategoryFilter = data.filter(r => r.category_parent == null);
        for (const item of this.CategoryFilter) {
          if (item.id === this.idCategoryActive) {
              this.categoryActive = item;
          }
        }
      },
      error => {
        console.log(<any>error);
      }
    );

     // get regiones
    this.serviciosService.getRegiones().subscribe(
      data => {
        this.region = data;
      },
      error => {
        console.log(<any>error);
      }
    );

    // get duracion
    this.serviciosService.getDuracion().subscribe(
      data => {
        this.duracion = data;
      },
      error => {
        console.log(<any>error);
      }
    );


    /**/
    // recibe por ruting parametro ID
    /*this.sub = this.route.params.subscribe(params => {
      //localStorage.removeItem('resultados');
      this.id = params['id'];
      if(!this.id){
        this.getsubCategory();
      }else{
        if(this.id === 'resultado'){
          this.resultados = JSON.parse(localStorage.getItem('resultados'));
          this.query = JSON.parse(localStorage.getItem('buscador')).buscar;
          console.log(this.resultados);

          this.ServiciosService.buscarExperiencia(this.query).subscribe( 
            data => {
              this.resultados = data;
              localStorage.setItem('resultados', JSON.stringify(this.resultados));
              //console.log(JSON.parse(localStorage.getItem('resultados')));
            },
            error => {
              console.log(<any>error);
            }
          );

        }else
        {
          this.id = +params['id'];// (+) converts string 'id' to a number
          this.getSubCategoryFilter();
        } 
      }
    });    */
  }

  // get getSubCategoryFilter
  getSubCategoryFilter() {
    this.serviciosService.getSubCategoryFilter(this.id).subscribe( 
      data => {
        this.SubCategoryFilter = data;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  // get SubCategory
  getsubCategory() {
    this.serviciosService.subcategoria().subscribe(
      data => {
        this.SubCategory = data;
      },
      error => {
        console.log(<any>error);
      }
    );
  }


}

