import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss']
})
export class FruitsComponent implements OnInit {

  posts: any[] = []
  titulo:string = 'Fruits'
  constructor( private butter: BlogService ) { }

  ngOnInit(): void {
    /* Optener los post por categoria */
    this.butter.getCategorie( 'fruits' )
    .then( post => {
      this.posts = post.data.data
    } )
  }

}
