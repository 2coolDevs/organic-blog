import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.scss'],
})
export class BreakfastComponent implements OnInit {
  posts: any[] = [];
  titulo: string = 'BreakFast';
  constructor(private butter: BlogService) {}

  ngOnInit(): void {
    /* Optener los post por categoria */
    this.butter.getCategorie('breakfast').then((post) => {
      this.posts = post.data.data;
    });
  }

  // TODO
  /*
    1. recuperar todos los post de breakFast
  */
}
