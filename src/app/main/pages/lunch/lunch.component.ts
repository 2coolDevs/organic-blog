import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.scss']
})
export class LunchComponent implements OnInit {

  posts: any[] = []
  titulo:string = 'Lunch'
  constructor( private butter: BlogService ) { }

  ngOnInit(): void {
    /* Optener los post por categoria */
    this.butter.getCategorie( 'lunch' )
    .then( post => {
      this.posts = post.data.data
    } )
  }
}
