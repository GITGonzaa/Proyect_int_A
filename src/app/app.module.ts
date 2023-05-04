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
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErrorComponent } from './components/error/error.component';
import { IndexComponent } from './components/index/index.component';
import { ButtonloginComponent } from './components/buttonlogin/buttonlogin.component';
import { ButtonlogoutComponent } from './components/buttonlogout/buttonlogout.component';
import { NavbardashComponent } from './components/navbardash/navbardash.component';
import { EducaciondashComponent } from './components/educaciondash/educaciondash.component';
import { ExperienciadashComponent } from './components/experienciadash/experienciadash.component';
import { HeaderdashComponent } from './components/headerdash/headerdash.component';
import { ProyectosdashComponent } from './components/proyectosdash/proyectosdash.component';
import { SkillsdashComponent } from './components/skillsdash/skillsdash.component';
import { CarruseldashComponent } from './components/carruseldash/carruseldash.component';
import { PortadadashComponent } from './components/portadadash/portadadash.component';
import { FotoperfildashComponent } from './components/portadadash/fotoperfildash/fotoperfildash.component';
import { InfosobremidashComponent } from './components/portadadash/infosobremidash/infosobremidash.component';
import { RedesdashComponent } from './components/navbardash/redesdash/redesdash.component';
import { LogoutComponent } from './components/modals/logout/logout.component';
import { PerfileditComponent } from './components/modals/perfiledit/perfiledit.component';
import { InfoeditComponent } from './components/modals/infoedit/infoedit.component';
import { Carr1editComponent } from './components/modals/carr1edit/carr1edit.component';
import { Carr2editComponent } from './components/modals/carr2edit/carr2edit.component';
import { Carr3editComponent } from './components/modals/carr3edit/carr3edit.component';
import { Carr4editComponent } from './components/modals/carr4edit/carr4edit.component';
import { Exp1editComponent } from './components/modals/exp1edit/exp1edit.component';
import { Exp2editComponent } from './components/modals/exp2edit/exp2edit.component';
import { Exp3editComponent } from './components/modals/exp3edit/exp3edit.component';
import { Educ1editComponent } from './components/modals/educ1edit/educ1edit.component';
import { Educ2editComponent } from './components/modals/educ2edit/educ2edit.component';
import { Skill1editComponent } from './components/modals/skill1edit/skill1edit.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FooterComponent } from './components/footer/footer.component';




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
    DashboardComponent,
    ErrorComponent,
    IndexComponent,
    ButtonloginComponent,
    ButtonlogoutComponent,
    NavbardashComponent,
    EducaciondashComponent,
    ExperienciadashComponent,
    HeaderdashComponent,
    ProyectosdashComponent,
    SkillsdashComponent,
    CarruseldashComponent,
    PortadadashComponent,
    FotoperfildashComponent,
    InfosobremidashComponent,
    RedesdashComponent,
    LogoutComponent,
    PerfileditComponent,
    InfoeditComponent,
    Carr1editComponent,
    Carr2editComponent,
    Carr3editComponent,
    Carr4editComponent,
    Exp1editComponent,
    Exp2editComponent,
    Exp3editComponent,
    Educ1editComponent,
    Educ2editComponent,
    Skill1editComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
