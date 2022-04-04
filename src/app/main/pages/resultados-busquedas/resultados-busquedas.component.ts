import {
  AfterContentChecked,
  AfterViewChecked,
  Component,
  OnInit,
} from '@angular/core';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-resultados-busquedas',
  template: `
    <section>
      <div class="container wrap-content-max">
        <div class="row d-flex justify-content-between">
          <div class="col-12 mb-5 mb-md-0 col-md-9">
            <div class="row d-flex justify-content-between">
              <article
                [ngStyle]="{
                  'margin-bottom': !postsResultado?.length ? '0rem' : '2.5rem'
                }"
                class="title"
              >
                <h1>{{ 'busqueda' | titlecase }}</h1>
                <hr />
              </article>
              <!-- Alert no resultado -->
              <div *ngIf="hayResultado === false" class="alert" role="alert">
                no se encontraron resultados
              </div>

              <!-- post component -->
              <ng-container *ngIf="postsResultado.length; else loader">
                <app-result-post
                  *ngFor="let post of postsResultado"
                  [post]="post"
                  class="col-12 col-md-6 mb-5 mb-md-0 mx-auto mx-md-0"
                ></app-result-post>
              </ng-container>

              <ng-template #loader class="row d-flex justify-content-center mx-auto">
                <app-skeleton-loader *ngIf="hayResultado" class="d-flex justify-content-center"></app-skeleton-loader>
              </ng-template>
            </div>
          </div>

          <!-- Lateral content blog -->
          <div class="col-12  col-md-3 d-flex justify-content-end">
            <!-- lateral blog content -->
            <app-lateral-blog></app-lateral-blog>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./resultados-busquedas.component.scss'],
})
export class ResultadosBusquedasComponent
  implements AfterContentChecked, OnInit
{
  constructor(public butter: BlogService) {}
  hayResultado!: boolean;
  postsResultado!: any[];

  ngOnInit(): void {}
  ngAfterContentChecked(): void {
    this.postsResultado = this.butter.postsResultado;
    this.hayResultado = this.butter.hayResultado;
    // console.log(this.postsResultado.length);
  }
}
