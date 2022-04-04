import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-homemade',
  templateUrl: './homemade.component.html',
  styleUrls: ['./homemade.component.scss']
})
export class HomemadeComponent implements OnInit {

  titulo:string = 'Home made'
  posts!: any []
  constructor( private butter:BlogService ) { }

  ngOnInit(): void {
    this.butter.getCategorie( 'home-made' )
    .then( res => this.posts = res.data.data )
  }

}
