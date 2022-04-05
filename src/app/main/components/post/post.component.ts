import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  template: `
    <article>
      <div (click)="refresh()" class="wrap-image">
        <img [src]="post?.featured_image" [alt]="post?.featured_image_alt" />
      </div>
      <div class="wrap-info">
        <p [routerLink]="['/categoria/', post?.categories?.[0].name]">
          {{ post?.categories[0].name | uppercase }}
        </p>
        <h2 (click)="refresh()">{{ post?.title | titlecase }}</h2>
        <div></div>
        <span class="wrap_read-more d-flex justify-content-between">
          <i class="fa-solid fa-clock"></i>
          <p>{{ post?.created | date: 'LLLL dd, YYY' }}</p>
        </span>
      </div>
    </article>
  `,
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  ngOnInit(): void {}

  constructor(private _router: Router) {}
  /* Recibo los datos de la variable post del componente padre */
  @Input() post!: any;

  refresh() {
    this._router
      .navigateByUrl('/home', { skipLocationChange: true })
      .then(() => {
        this._router.navigate([`/${this.post?.slug}`]);
        this._router.routeReuseStrategy.shouldReuseRoute = () => false;
      });
  }
}
