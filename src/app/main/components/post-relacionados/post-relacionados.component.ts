import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Subscription, Subject } from 'rxjs';

import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-post-relacionados',
  template: `

          <div  class="row mt mb d-flex justify-content-center justify-content-md-between">
              <article  *ngIf="posts.length" class="title-page">
                 <h1>{{ "Post Relacionados" |titlecase}}</h1>
                 <hr>
             </article>
              <app-post *ngFor="let post of (posts |postRelacionados)" [post]="post" class="col-12 col-md-4 d-flex justify-content-center mb-5 mb-md-0"></app-post>
          </div>
  `,
  styles: [
    `
      .mt {
        margin-top: 7rem;
      }

      .mb {
        margin-bottom: 7rem;
      }
    `
  ],
})
export class PostRelacionadosComponent implements OnInit {
  constructor( private butter:BlogService ) {}
  @Input() slug!:string
  categorie!:any

  posts!: any[]

  ngOnInit(): void {

      this.butter.getPost( this.slug )
      .then( res => {
        this.categorie = res.data.data.categories?.[0].slug

        this.butter.getRelacionados(`${this.categorie}`)
        .then( post => {
          this.posts = post.data.data
        } )

      } )


  }



}
