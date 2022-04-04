import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { BuscadorComponent } from './buscador/buscador.component';
import { NavegationComponent } from './navegation/navegation.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    BuscadorComponent,
    NavegationComponent,
    FooterComponent,
    BuscadorComponent
  ],
  exports: [
    NavegationComponent,
    FooterComponent,
    BuscadorComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule,
    FormsModule
  ]
})
export class SharedModule { }
