import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './components/inicio/inicio.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { RouterModule } from '@angular/router';
import { SobreComponent } from './components/sobre/sobre.component';
import { EducacaoComponent } from './components/educacao/educacao.component';
import { ContatoComponent } from './components/contato/contato.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    CursosComponent,
    SobreComponent,
    EducacaoComponent,
    ContatoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([

      {
        path: '', redirectTo: 'inicio', pathMatch: 'full'
      },


    ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
