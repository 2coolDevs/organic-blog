import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/main/services/blog.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
    `
      mat-form-field {
        width: 100% !important;
        /* max-width: 20rem; */
      }
      mat-icon {
        color: #bfbfbf !important;
      }
    `,
  ],
})
export class BuscadorComponent {
  constructor(private butter: BlogService, private _router: Router) {}

  query: string = '';

  searchPost() {
    this.butter.query = this.query.trim();
    this.butter.searchPosts();

    if (this.query) {
      this._router
        .navigateByUrl('/home', { skipLocationChange: true })
        .then(() => {
          this._router.navigate([`/search/${this.query}`]);
          this._router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.query = '';
        });
    }
  }
}
