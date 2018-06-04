import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { HttpClientModule, HttpHeaders } from "@angular/common/http";
import { ServiciosService } from './services/servicios.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { MejorSandwichComponent } from './components/mejor-sandwich/mejor-sandwich.component';
import { BarRatingModule  } from "ngx-bar-rating";
import { RutaDosComponent } from './components/ruta-dos/ruta-dos.component';
import { SandwichComponent } from './components/experiencias/sandwich/sandwich.component';
import { ListaExperienciasComponent } from './components/lista-experiencias/lista-experiencias.component';
import { ExperienciasDelMesComponent } from './components/experiencias-del-mes/experiencias-del-mes.component';

import { AgmCoreModule } from '@agm/core';
import { RutasDelMesComponent } from './components/rutas-del-mes/rutas-del-mes.component';
import { MapaItemComponent } from './components/ruta-dos/mapa-item/mapa-item.component';
import { DetalleItemComponent } from './components/ruta-dos/detalle-item/detalle-item.component';
import { ExperienciaDetalleComponent } from './components/experiencias/experiencia-detalle/experiencia-detalle.component';




const appRoutes: Routes = [
  { path: 'experiencias',
   component: ExperienciasComponent,
   data: { title: 'Experienciass | Yagan' }
  },
  { path: 'home', component: HomeComponent,   data: { title: 'Home' } },
  { path: 'ruta', component: RutaDosComponent,   data: { title: 'ruta' } },
  { path: 'los-mejores-sandwich-de-santiago', component: MejorSandwichComponent,   data: { title: 'Los mejores sandwitch de santiago' } },
  { path: 'ruta/:id', component: RutaDosComponent },
  { path: 'experiencia/:id', component: ExperienciaDetalleComponent },
  /*{
    path: 'heroes',
    component: ,|
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },*/
  { path: '**', component:HomeComponent, data: { title: 'Yagan' }   }
];/**/
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ExperienciasComponent,
    MejorSandwichComponent,
    RutaDosComponent,
    SandwichComponent,
    ListaExperienciasComponent,
    ExperienciasDelMesComponent,
    RutasDelMesComponent,
    MapaItemComponent,
    DetalleItemComponent,
    ExperienciaDetalleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false },//<-- debugging purposes only
    ),
    BarRatingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDziIQaJhEYq3IRQ7TuNJo5Q9RIuDOQenc'
    })
 
  ],
  providers: [ServiciosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
