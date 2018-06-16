import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { HttpClient} from "@angular/common/http";
import { ServiciosService } from '../../../services/servicios.service';
import { Experience, Category } from '../../../models/models';


@Component({
  selector: 'app-sandwich',
  templateUrl: './sandwich.component.html',
  styleUrls: ['./sandwich.component.scss']
})
export class SandwichComponent implements OnInit {
  
 //Arrays Experiences and Category
 Experiences: Experience[] = [];
 Category: Category[] = [];

 constructor(private http : HttpClient,  private ServiciosService: ServiciosService, private router: Router, private titleService: Title) {  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

}
