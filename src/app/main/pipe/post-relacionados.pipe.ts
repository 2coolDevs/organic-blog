import { OnInit, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Pipe({
  name: 'postRelacionados'
})
export class PostRelacionadosPipe implements PipeTransform{

  transform(posts: any[]):any {
    let slug:string
    // 1. obtengo el slug
    this.activatedRoute.params
    .subscribe( post => slug = post?.['post'])

    // 2. obtengo post que sea diferente al slug
    return posts?.filter( el => el.slug !== slug );
  }

  constructor( private activatedRoute:ActivatedRoute ) {}


}
