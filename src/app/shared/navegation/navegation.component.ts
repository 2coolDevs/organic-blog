import { Component} from '@angular/core';

@Component({
  selector: 'app-navegation',
  templateUrl: './navegation.component.html',
  styleUrls: ['./navegation.component.scss']
})
export class NavegationComponent {

  constructor() { }

  muestraMenu: boolean = false;
  toggleSearch: boolean = false;

  desplegarMenu() {
  this.muestraMenu = !this.muestraMenu
  /* Si se abre el menu entonces el toggleSearch es falso */
  this.toggleSearch = false;

  }

  desplegarBuscador() {
    this.toggleSearch = !this.toggleSearch
  /* Si se abre el buscador entonces el menu es falso */
  this.muestraMenu = false;

  }

  /* Cerrar menu  */
  // 1. este metodo se ejecuta cuando el evento click en cualquier li

  cerrarMenu() {
    this.muestraMenu = false;
  }

}
