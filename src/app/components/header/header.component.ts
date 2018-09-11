import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ParamMap, Router, ActivatedRoute  } from "@angular/router";
import { ServiciosService } from '../../services/servicios.service';
import { StorageService } from '../../services/storage.service';
import { HttpClient} from "@angular/common/http";
import { subCategory } from '../../models/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,  private http : HttpClient,  
    private ServiciosService: ServiciosService,
    protected StorageService: ServiciosService,
  ) { }

  @Output() busqueda = new EventEmitter();

  public url = 'http://administrator.yagan.world/core/api/subcategory/?string_text=';
  public api = 'http';
  public params = {
  
  };
  public query = '';

  public handleHttpResultSelected (result) {
    this.query = result.name;
    //console.log(this.query);
  }

  @Output() salida = new EventEmitter();

  public model: any = {};

  public resultados:subCategory;

mensaje: string = 'Este es el hijo header';
  saludo(value) {
    this.mensaje = value;
  }
//Para mandar
buscarExperiencia(string_text,region){
  let navigationExtras = {
    queryParams: {
      string_text: string_text,
      region: region,
    }
  };
  //this.router.navigate(['rutas-experiencias/:id'], navigationExtras);
  
}
buscar(){
  //localStorage.removeItem('buscador');
  //let user: User = { firstName: 'Henri', lastName: 'Bergson' };
  localStorage.setItem('buscador', JSON.stringify(this.model));
 // console.log(JSON.parse(localStorage.getItem('buscador')).buscar);
  //this.localStorage.setItem('buscador', JSON.stringify(this.model)).subscribe(() => {});
  /*
  if(localStorage.getItem('buscador')){
    localStorage.removeItem('buscador');
  }else {
    localStorage.setItem('buscador', JSON.stringify(this.model));  
    console.log(JSON.parse(localStorage.getItem('buscador')).buscar);
  }*/
  
  /* this.query = JSON.parse(localStorage.getItem('buscador')).buscar;
    this.ServiciosService.buscarExperiencia(JSON.parse(localStorage.getItem('buscador')).buscar).subscribe( 
      data => {
        localStorage.removeItem('resultados');
        this.resultados = data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
        //console.log(JSON.parse(localStorage.getItem('resultados')));
      },
      error => {
        console.log(<any>error);
      }
    ); */
  this.router.navigate(['rutas-experiencias', {q: this.model.buscar}]);

}
buscarbtn(){
  console.log("ser");
}

// Para recibir
ngOnInit() {
  localStorage.removeItem('buscador');
  $(".iconMenu").click(function(){
    $(".menu").slideToggle("fast");
  });


 /*
  this.route.queryParams.subscribe(params => {
    console.log(params.region);
    console.log(params.string_text);
     this.params = params['param1'];
        this.params = params['param2'];
  });*/
  
}

}
