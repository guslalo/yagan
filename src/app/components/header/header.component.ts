import { Component, OnInit } from '@angular/core';
import { ParamMap, Router, ActivatedRoute  } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  public url = 'http://administrator.yagan.world/core/api/subcategory/?string_text=';
  public api = 'http';
  public params = {
  
  };
  public query = '';

  public handleHttpResultSelected (result) {
    this.query = result.name;
    console.log(this.query);
  }

  public model: any = {};

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
  localStorage.removeItem('buscador');
  localStorage.setItem('buscador', JSON.stringify(this.model));  
  console.log(JSON.parse(localStorage.getItem('buscador')));
  this.router.navigate(['rutas-experiencias']);
}
// Para recibir
ngOnInit() {
  localStorage.removeItem('buscador');
 /*
  this.route.queryParams.subscribe(params => {
    console.log(params.region);
    console.log(params.string_text);
     this.params = params['param1'];
        this.params = params['param2'];
  });*/
  
}

}
