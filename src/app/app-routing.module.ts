import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './main/pages/home-page/home-page.component';
import { ViewPostComponent } from './main/pages/view-post/view-post.component';
import { QueEsHealtyComponent } from './main/pages/que-es-healty/que-es-healty.component';
import { ResultadosBusquedasComponent } from './main/pages/resultados-busquedas/resultados-busquedas.component';

const routes: Routes = [
  {
    path: 'home',component: HomePageComponent
  },
  {
    path: 'categoria',
     loadChildren: () => import( './categoria/categoria.module' )
    .then( m => m.CategoriaModule )
  },
  {
    path: 'que-es-healty',component: QueEsHealtyComponent
  },
  {
    path: 'search/:query',component: ResultadosBusquedasComponent
    },
  {
    path: ':post',component: ViewPostComponent
  },

  {path: '', redirectTo: 'home',pathMatch:'full'},
  {path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot( routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
