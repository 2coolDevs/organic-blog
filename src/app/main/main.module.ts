import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PostRecienteComponent } from './components/post-reciente/post-reciente.component';
import { BoletinComponent } from './components/boletin/boletin.component';
import { BreakfastComponent } from './pages/breakfast/breakfast.component';
import { LunchComponent } from './pages/lunch/lunch.component';
import { FruitsComponent } from './pages/fruits/fruits.component';
import { HomemadeComponent } from './pages/homemade/homemade.component';
import { PostComponent } from './components/post/post.component';
import { LateralBlogComponent } from './components/lateral-blog/lateral-blog.component';
import { ViewPostComponent } from './pages/view-post/view-post.component';
import { AppRoutingModule } from '../app-routing.module';
import { WrapContentBlogComponent } from './components/wrap-content-blog/wrap-content-blog.component';
import { DatePostComponent } from './pages/date-post/date-post.component';
import { PostRelacionadosComponent } from './components/post-relacionados/post-relacionados.component';
import { PostRelacionadosPipe } from './pipe/post-relacionados.pipe';
import { QueEsHealtyComponent } from './pages/que-es-healty/que-es-healty.component';
import { ResultadosBusquedasComponent } from './pages/resultados-busquedas/resultados-busquedas.component';
import { ResultPostComponent } from './components/result-post/result-post.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SkeletonLoaderComponent } from './components/skeleton-loader/skeleton-loader.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [

    HomePageComponent,
    PostRecienteComponent,
    BoletinComponent,
    BreakfastComponent,
    LunchComponent,
    FruitsComponent,
    HomemadeComponent,
    PostComponent,
    LateralBlogComponent,
    ViewPostComponent,
    WrapContentBlogComponent,
    DatePostComponent,
    PostRelacionadosComponent,
    PostRelacionadosPipe,
    QueEsHealtyComponent,
    ResultadosBusquedasComponent,
    ResultPostComponent,
    SkeletonLoaderComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    AppRoutingModule,
    NgxSkeletonLoaderModule,
  SharedModule  ]
})
export class MainModule { }
