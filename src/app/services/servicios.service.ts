import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";//, HttpHeaders, HttpParams
import { Observable } from 'rxjs';



//const url = 'http://yagan.dev21.cl/'
const url = 'https://administrator.yagan.world/' 

@Injectable()
export class ServiciosService {

constructor(private http: HttpClient) {  }
 


  getCategory(): Observable<any>{
    return this.http.get(url+'core/api/category/');
  }

  //obxserbable subategoria filrrada por ID
  getSubCategoryFilter(id:number): Observable<any>{
    return this.http.get(url+'core/api/subcategory/?category_parent='+id);
  }
  //get todas las subcategorias
  subcategoria():Observable<any>{
    return this.http.get(url+'core/api/subcategory/');
  }

  //get REGIONES
  getRegiones(): Observable<any>{
    return this.http.get(url+'core/api/region/');
  }

  //get duracion
  getDuracion(): Observable<any>{
    return this.http.get(url+'core/api/duraton_day/');
  }

  //obserbable ruta parametro ID
  getRuta(id:any): Observable<any>{
    return this.http.get(url+'route/api/route/'+id+'/');
  }

  //Obserbable ruta item parametro ID
  getERutaItemId(id:any): Observable<any>{
    return this.http.get(url+'route/api/route_item/'+id+'/');
  }

  //get experiencia
  getExperience(): Observable<any>{
    return this.http.get(url+'experience/api/experience/');
  }

  //Observable caregoria parametro ID
  getExperienceId(id:any): Observable<any>{
    return this.http.get(url+'core/api/category/'+id+'/');
  }

  //get experiencia Observable ID
  getExperienceModal(id:any): Observable<any>{
    return this.http.get(url+'experience/api/experience/'+id+'/');
  }

  //getSlide
  getSlide(): Observable<any>{
    return this.http.get(url+'cms/api/slide/');
  }



  //buscar experiencia
  buscarExperiencia(query:string):Observable<any>{
    return this.http.get(url+'core/api/subcategory/?string_text='+query);
  }


  //buscar experiencia
  searchDefault(query:string):Observable<any>{
    return this.http.get(url+'core/api/subcategory/' + query);
  }
 










  


  getRutas(): Observable<any>{
    return this.http.get(url+'route/api/route/');
  }

 

  //experienciaClick
  getERutaItem(): Observable<any>{
    return this.http.get(url+'route/api/route_item/');
  }

 

  


  





}
