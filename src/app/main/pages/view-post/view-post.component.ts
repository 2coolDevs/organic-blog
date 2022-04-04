import {
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss'],
})
export class ViewPostComponent implements OnInit {
  constructor(
    private butter: BlogService,
    private activateRoute: ActivatedRoute
  ) {}

  paramSlug: string = '';
  post: any = {};


  ngOnInit(): void {

    // Optengo la variable slug del post
    this.activateRoute.params.subscribe(
      (el) => (this.paramSlug = el?.['post'])
    );

    // TODO:
    // 1. Recuperar un solo post por el slug
    this.butter.getPost(this.paramSlug).then((res) => {
      this.post = res.data.data;
    });
  }
}
