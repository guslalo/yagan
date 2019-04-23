import { Component, OnInit, NgModule,  } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient} from "@angular/common/http";
import { ServiciosService } from '../../services/servicios.service';
import { Observable } from 'rxjs/Rx';
import { Category, subCategory, Ruta, Experience } from '../../models/models';
import {NgbRating, } from '@ng-bootstrap/ng-bootstrap';
import {DecimalPipe} from '@angular/common';


@Component({
  selector: 'app-mejor-sandwich',
  templateUrl: './mejor-sandwich.component.html',
  styleUrls: ['./mejor-sandwich.component.scss'],
  providers:[ServiciosService],
  styles: [`
    .star {
      position: relative;
      display: inline-block;
      font-size: 2rem;
      color: #d3d3d3;
    }
    .full {
      color: yellow;
    }
    .half {
      position: absolute;
      display: inline-block;
      overflow: hidden;
      color: yellow;
    }
  `]
})

export class MejorSandwichComponent implements OnInit {
  CategoryFilter: Category[] = [];
  ExperienciaItem: Ruta[] = [];
  experiencia: Experience[] = [];

  bootRate = 1;
  faRate = 1;
  cssRate = 1;
  faoRate = 2.3;
  faoRated = false;
  currentRate = 3.5;
  rate:any;
  public evaluated:any;

  onFaoRate(e) {
    this.faoRated = true;
    this.faoRate = e;
  }

  faoReset() {
    this.faoRated = false;
    this.faoRate = 5.6;
  }
  constructor(
    private http : HttpClient,  
    private ServiciosService: ServiciosService, 
    private router: Router, 
    private route: ActivatedRoute,
    private titleService: Title,
    private dp: DecimalPipe
  ){ }

    
  id: number;
  private sub: any;
  public idItem = null;
  
  captureId(id){
    this.idItem = id;
    console.log("ruta item", id);
  }

  ngOnInit() {
    //scrollTop
    window.scrollTo(0, 0);
    //title
    this.titleService.setTitle('Experiencias | Yagan');

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      //getExperienceId
      this.ServiciosService.getExperienceId(this.id).subscribe( 
        data => {
          console.log(data);   
          //item2.evaluated.avg
          this.experiencia.push(data);
          for(let item3 of data.experiences){
            console.log(item3.evaluated.avg);
            //this.evaluated.push(item3.evaluated.avg);
           
            this.evaluated =  Math.round(item3.evaluated.avg * 100) / 100;
           
          }
          
        },
        error => {
          console.log(<any>error);
        }
      ); 
    });
  }

}
