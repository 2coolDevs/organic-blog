import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private butter: BlogService) {}

  // Estos son los post reciente solo muestran 2 posiciones del arr
  posts: any[] = [];
  ngOnInit() {
    this.butter.getAllPost().then((post) => {
      this.posts = post?.data.data;
    });
  }
}
