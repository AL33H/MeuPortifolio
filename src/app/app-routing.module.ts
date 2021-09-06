import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './components/contato/contato.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { EducacaoComponent } from './components/educacao/educacao.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SobreComponent } from './components/sobre/sobre.component';

const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'home' , component: InicioComponent},
  { path: 'cursos', component: CursosComponent},
  { path: 'sobre', component: SobreComponent},
  { path: 'educacao', component: EducacaoComponent},
  { path: 'contato', component: ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
