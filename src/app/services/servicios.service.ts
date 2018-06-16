import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";//, HttpHeaders, HttpParams
//import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs/Rx';


const url = 'http://yagan.dev21.cl/'

@Injectable()
export class ServiciosService {

  constructor(private http: HttpClient) {  }

  getCategory(): Observable<any>{
    return this.http.get(url+'core/api/category/');
  }

  getSubCategoryFilter(id:number): Observable<any>{
    return this.http.get(url+'core/api/subcategory/?category_parent='+id);
  }

  subcategoria():Observable<any>{
    return this.http.get(url+'core/api/subcategory/');
  }

  //getERutaItemDetail
  getRegiones(): Observable<any>{
    return this.http.get(url+'core/api/region/');
  }

  //get duracion
  getDuracion(): Observable<any>{
    return this.http.get(url+'core/api/duraton_day/');
  }


  getRuta(id:any): Observable<any>{
    return this.http.get(url+'route/api/route/'+id+'/');
  }
  //experienciaClick
  getERutaItemId(id:any): Observable<any>{
    return this.http.get(url+'route/api/route_item/'+id+'/');
  }




















  //
  getExperience(): Observable<any>{
    return this.http.get(url+'experience/api/experience/');
  }


  getRutas(): Observable<any>{
    return this.http.get(url+'route/api/route/');
  }

  //experienciaClick
  getExperienceId(id:any): Observable<any>{
    return this.http.get(url+'experience/api/experience/'+id+'/');
  }

  //experienciaClick
  getERutaItem(): Observable<any>{
    return this.http.get(url+'route/api/route_item/');
  }

  //getERutaItemDetail
  getERutaItemDetail(): Observable<any>{
    return this.http.get(url+'route/api/route_item_detail/');
  }

  


  





}
