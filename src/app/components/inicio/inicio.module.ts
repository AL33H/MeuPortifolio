import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InicioComponent } from './inicio.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
    RouterModule.forChild([
      {
        path: '', component: InicioComponent
      },
      {
        path: '/home', component: InicioComponent
      }
    ])
  ]
})
export class InicioModule { }
