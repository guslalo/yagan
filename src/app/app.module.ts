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

import { TruncateModule } from 'ng2-truncate';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';




const appRoutes: Routes = [

  { path: 'home', component: HomeComponent},

  { path: 'rutas-experiencias',component: ExperienciasComponent},
  { path: 'rutas-experiencias/:id', component: ExperienciasComponent },

  { path: 'ruta', component: RutaDosComponent},
  { path: 'ruta/:id', component: RutaDosComponent },

  { path: 'experiencias', component: MejorSandwichComponent},
  { path: 'experiencias/:id', component: MejorSandwichComponent},

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
    TruncateModule,
    Ng2CarouselamosModule,
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
