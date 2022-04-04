import { Component, Input, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-post-reciente',
  templateUrl: './post-reciente.component.html',
  styleUrls: ['./post-reciente.component.scss']
})
export class PostRecienteComponent {

constructor() { }

  @Input() post: any
  }

