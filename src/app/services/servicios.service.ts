import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";//, HttpHeaders, HttpParams
//import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs/Rx';


const url = 'http://yagan.dev21.cl/'

@Injectable()
export class ServiciosService {

  constructor(private http: HttpClient) {  }

  //
  getExperience(): Observable<any>{
    return this.http.get(url+'experience/api/experience/');
  }

  getCategory(): Observable<any>{
    return this.http.get(url+'core/api/category/');
  }

  getRuta(id:any): Observable<any>{
    return this.http.get(url+'route/api/route/'+id+'/');
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


  





}
