import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ModalsComponent } from './components/modals/modals.component';
import { LoginComponent } from './components/modals/login/login.component';
import { RedessocComponent } from './components/navbar/redessoc/redessoc.component';
import { LogoAPComponent } from './components/navbar/logo-ap/logo-ap.component';
import { NombrecabeceraComponent } from './components/navbar/nombrecabecera/nombrecabecera.component';
import { PortadaComponent } from './components/portada/portada.component';
import { InfosobremiComponent } from './components/portada/infosobremi/infosobremi.component';
import { MenunavintComponent } from './components/portada/menunavint/menunavint.component';
import { FotoperfilComponent } from './components/portada/fotoperfil/fotoperfil.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { CuerpoComponent } from './components/cuerpo/cuerpo.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ModalsComponent,
    LoginComponent,
    RedessocComponent,
    LogoAPComponent,
    NombrecabeceraComponent,
    PortadaComponent,
    InfosobremiComponent,
    MenunavintComponent,
    FotoperfilComponent,
    CarruselComponent,
    CuerpoComponent,
    EducacionComponent,
    ExperienciaComponent,
    SkillsComponent,
    ProyectosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
