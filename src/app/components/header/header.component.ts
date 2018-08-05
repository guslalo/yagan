import { Component, OnInit } from '@angular/core';
import { ParamMap, Router, ActivatedRoute  } from "@angular/router";
import { ServiciosService } from '../../services/servicios.service';
import { HttpClient} from "@angular/common/http";
import { subCategory } from '../../models/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,  private http : HttpClient,  private ServiciosService: ServiciosService,) { }

  public url = 'http://administrator.yagan.world/core/api/subcategory/?string_text=';
  public api = 'http';
  public params = {
  
  };
  public query = '';

  public handleHttpResultSelected (result) {
    this.query = result.name;
    //console.log(this.query);
  }

  public model: any = {};

  public resultados:subCategory;

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
 
    localStorage.setItem('buscador', JSON.stringify(this.model));  
    //console.log(JSON.parse(localStorage.getItem('buscador')));
    this.query = JSON.parse(localStorage.getItem('buscador')).buscar;

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
    
  


  this.router.navigate(['rutas-experiencias/resultado']);



}
// Para recibir
ngOnInit() {
  localStorage.removeItem('buscador');
  $(".iconMenu").click(function(){
    $(".menu").slideToggle("fast");
  })
 /*
  this.route.queryParams.subscribe(params => {
    console.log(params.region);
    console.log(params.string_text);
     this.params = params['param1'];
        this.params = params['param2'];
  });*/
  
}

}
