import { Component, Input, OnChanges } from '@angular/core';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-result-post',
  template: ` <app-post [post]="post"></app-post> `,
  styleUrls: ['./result-post.component.scss'],
})
export class ResultPostComponent implements OnChanges {
  @Input() post: any;
  posts: any[] = [];
  constructor(public butter: BlogService) {}
  ngOnChanges(): void {
    // this.posts = this.butter.postsResultado;
    console.log(this.post);
  }
}
