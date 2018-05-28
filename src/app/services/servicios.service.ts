import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";//, HttpHeaders, HttpParams
//import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs/Rx';


 
 const url = 'http://yagan.dev21.cl/'

@Injectable()
export class ServiciosService {

  constructor(private http: HttpClient) { 

    //console.log(this.getExperience);

  }
//
  getExperience(): Observable<any>{
    return this.http.get('http://yagan.dev21.cl/experience/api/experience/');
  }

  getCategory(): Observable<any>{
    return this.http.get('http://yagan.dev21.cl/core/api/category/');
    //return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  //experienciaClick
  getExperienceId(id:any): Observable<any>{
    return this.http.get('http://yagan.dev21.cl/experience/api/experience/'+id+'/');
  }

}
