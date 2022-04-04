import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrap-content-blog',
  templateUrl: './wrap-content-blog.component.html',
  styles: [

    `
    section {
  height: auto;
  min-height: 40rem !important;
}
`
  ]
})
export class WrapContentBlogComponent {

  constructor() {}

/* Recibo los posts */
  @Input() posts!: any[]

  /* recibo el titulo de pagina */
  @Input() titulo!:string

}
