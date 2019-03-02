

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

 cid_all: boolean;
 rg_all: boolean;
 dc_all: boolean;

 public query = '';
 localStorage: any;

 idCategoryActive: number;
 public categoryActive: Category = new Category;
 public banner: string;

 params_url = new Map();

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

  setUrl(code: any, value: any) {
    this.params_url.set(code, value);
    console.log(this.params_url);
    this.getData2();
    // this.idItem = id;
  }

  ngOnInit() {
    this.getData();
  }

  getData2() {
    // get service
    // this.route.params.subscribe(params => {
      let paramSearch: string;
      // let q: string;
      let cid: string;
      let rg: string;
      let dc: string;

      this.cid_all = true;
      this.rg_all = true;
      this.dc_all = true;

      window.scrollTo(0, 493);

      // q = (localStorage.getItem('q')=='') ? params['q'] : localStorage.getItem('q');
      // cid = (localStorage.getItem('cid')=='') ? params['cid'] : localStorage.getItem('q');

      // q =  (params['q']) ? params['q'] : '';
      cid = (this.params_url.get('cid')) ? this.params_url.get('cid') : '';
      rg = (this.params_url.get('rg')) ? this.params_url.get('rg') : '';
      dc = (this.params_url.get('dc')) ? this.params_url.get('dc') : '';

      // check region
      for (const reg of this.region) {
        reg.status = false;
        if (rg === reg.code) {
          reg.status = true;
        }
      }
      // end check region
      // check category
      for (const cat of this.CategoryFilter) {
        cat.status = false;
        if (+cid === cat.id) {
          cat.status = true;
        }
      }

      // check duration
      for (const d of this.duracion) {
        d.status = false;
        if (+dc === d.id) {
          d.status = true;
        }
      }

      paramSearch = '?';
      paramSearch += 'q=';
      if (cid !== '') {
        paramSearch += '&category_parent=' + cid;
        this.cid_all = false;
      }
      if (rg !== '') {
        paramSearch += '&region=' + rg;
        this.rg_all = false;
      }
      if (dc !== '') {
        paramSearch += '&duration=' + dc;
        this.dc_all = false;
      }

      console.log(paramSearch);
      this.serviciosService.searchDefault(paramSearch).subscribe(
        data => {
          this.resultados = data;
          // console.log(data);
        },
        error => {
          console.log(<any>error);
        }
      );
  }

  getData() {
    this.mensaje = 'Este es el experiencias';
    this.banner = 'assets/img/cores/experiencias.png';
    this.titleService.setTitle('Rutas y experiencias | Yagan');
    $('.menusidebar .sidebarMobile').click(function() {
      $('.menusidebar').find('form').slideToggle();
    });
    window.scrollTo(0, 0);
    this.cid_all = true;
    this.rg_all = true;
    this.dc_all = true;

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
      rg = (this.params_url.get('rg')) ? this.params_url.get('rg') : '';
      dc = (params['dc']) ? params['dc'] : '';

      // check region

      for (const reg of this.region) {
        reg.status = false;
        if (rg === reg.code) {
          reg.status = true;
        }
      }
      console.log(this.region);
      // end check region

      paramSearch = '?';

      this.idCategoryActive = +cid,

      console.log('q =>' + q);
      if (q !== '') {
        paramSearch += 'string_text=' + q;
      } else {
        paramSearch += 'q=';
        if (cid !== '') {
          paramSearch += '&category_parent=' + cid;
        }
        if (rg !== '') {
          paramSearch += '&region=' + rg;
        }
        if (dc !== '') {
          paramSearch += '&duration=' + dc;
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

      // get categorias
      this.serviciosService.getCategory().subscribe(
        data => {
          console.log('GET CATEGORIES');
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

    });

     // get regiones
    this.serviciosService.getRegiones().subscribe(
      data => {
        this.region = data;
        console.log('get a region');
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

