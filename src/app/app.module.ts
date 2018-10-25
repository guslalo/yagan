import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxTypeaheadModule } from 'ngx-typeahead';

import { HttpClientModule, HttpHeaders } from "@angular/common/http";
import { ServiciosService } from './services/servicios.service';
import { StorageService } from './services/storage.service';

//modulos terceros
import { DisqusModule } from 'ngx-disqus';

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
import { AgmDirectionModule } from 'agm-direction';
import { RutasDelMesComponent } from './components/rutas-del-mes/rutas-del-mes.component';
import { MapaItemComponent } from './components/ruta-dos/mapa-item/mapa-item.component';
import { DetalleItemComponent } from './components/ruta-dos/detalle-item/detalle-item.component';
import { ExperienciaDetalleComponent } from './components/experiencias/experiencia-detalle/experiencia-detalle.component';

import { TruncateModule } from 'ng2-truncate';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

import { OwlModule } from 'ngx-owl-carousel';

import { DetalleItemExperienciaComponent } from './components/mejor-sandwich/detalle-item-experiencia/detalle-item-experiencia.component';
import { VerMasComponent } from './components/ruta-dos/ver-mas/ver-mas.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

const router: Routes = [

  { path: '', component: HomeComponent},
  { path: 'rutas-experiencias',component: ExperienciasComponent},
  { path: 'rutas-experiencias/:id', component: ExperienciasComponent },
  { path: 'route', component: RutaDosComponent},
  { path: 'route/:id', component: RutaDosComponent },
  { path: 'subcategory', component: MejorSandwichComponent},
  { path: 'subcategory/:id', component: MejorSandwichComponent},
  { path: '**', redirectTo: 'home', data: { title: 'Yagan' }   }
];

export const appRouters: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(router);

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
    ExperienciaDetalleComponent,
    DetalleItemExperienciaComponent,
    VerMasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TruncateModule,
    OwlModule,
    FormsModule, ReactiveFormsModule,
    NgxTypeaheadModule,
    routing,
    BarRatingModule,
    Angulartics2Module.forRoot(),
    DisqusModule.forRoot('yagan'),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDziIQaJhEYq3IRQ7TuNJo5Q9RIuDOQenc'
    }),
    AgmDirectionModule,
    AgmSnazzyInfoWindowModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [ServiciosService, StorageService, appRouters],
  bootstrap: [AppComponent]
})
export class AppModule { }
