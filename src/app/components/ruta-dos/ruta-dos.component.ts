import { Component, OnInit, Input, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { HttpClient} from "@angular/common/http";
import { ServiciosService } from '../../services/servicios.service';
import { Observable } from 'rxjs/Rx';
import { Experience, Category } from '../../models/models';


@Component({
  selector: 'app-ruta-dos',
  templateUrl: './ruta-dos.component.html',
  styleUrls: ['./ruta-dos.component.scss'],
  providers:[ServiciosService]
})
export class RutaDosComponent implements OnInit {

  @Input() public idExpecienciaRecibida:any;

  idExperiencia = "NULL"
  idRecibido(id){
    this.idExperiencia = id;
  }
   //constructor
   constructor(
    private http : HttpClient,  
    private ServiciosService: ServiciosService, 
    private router: Router, 
    private titleService: Title
  ){ }

  //Arrays Experiences and Category
  Experiences: Experience[] = [];
  ExperienceId: Experience[] = [];
  Category: Category[] = [];
  item:any;
  
  lat: any;
  lng: any;
  

  ngOnInit() {
    //title
    this.titleService.setTitle('Ruta experiencia| Yagan');

    //scrollTop
    window.scrollTo(0, 0);

    //get experiencias  
    /*this.ServiciosService.getExperience().subscribe( 
      data => {
        for(let item of data){ 
          this.Experiences.push(item);
        } 
      },
      error => {
        console.log(<any>error);
      }
    ); */
    //get experiencias  
    this.ServiciosService.getExperienceId(1).subscribe( 
      data => {
        //console.log(data);
        this.ExperienceId.push(data);
        console.log(this.ExperienceId);
      
        
        for(let item of this.ExperienceId){ 
          this.lat =  + item.latitude;
          this.lng =  + item.longitude;
        } 
      },
      error => {
        console.log(<any>error);
      }
    ); 

  }

}
