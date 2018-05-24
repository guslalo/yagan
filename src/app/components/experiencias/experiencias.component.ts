import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { HttpClient} from "@angular/common/http";
import { ServiciosService } from '../../services/servicios.service';

interface category{
  name: string;
}

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.scss'],
  providers:[ServiciosService]
})



export class ExperienciasComponent implements OnInit {
public category:Array<any>;

categorys: category[] = [];

  constructor( private http : HttpClient,  private ServiciosService: ServiciosService, private router: Router, private titleService: Title) {  }

  ngOnInit() {
    this.titleService.setTitle('Experiencias | gustavo');
    window.scrollTo(0, 0);

    this.ServiciosService.getCategory().subscribe( 
      data => {
        //console.log(data)
        for(let item of data){
          
          this.categorys.push(item);
          
        }
        console.log(this.categorys );
        //this.category.push(data);
        //console.log(this.category)
      
      },
      error => {
        //console.log(<any>error);
      }
    ); 
    
  }


}
