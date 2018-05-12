import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';

const appRoutes: Routes = [
  { path: 'experiencias',
   component: ExperienciasComponent,
   data: { title: 'Experienciass | Yagan' }
  },
  { path: 'home', component: HomeComponent,   data: { title: 'Home' } },
  //{ path: 'hero/:id',      component: HeroDetailComponent },
  /*{
    path: 'heroes',
    component: ,
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
    ExperienciasComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }//<-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
