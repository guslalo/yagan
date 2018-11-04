import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
//npm uninstall @ngx-pwa/local-storage

@Injectable()
export class StorageService {

  constructor() {
    //JSON.parse(localStorage.getItem('buscador')).buscar;

   }
 public busquedaStorage = JSON.parse(localStorage.getItem('resultados'));
   getBusqueda(){
    return this.busquedaStorage;
  }
  

}


