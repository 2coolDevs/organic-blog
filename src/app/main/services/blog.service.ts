import { AfterContentChecked, Injectable, OnInit } from '@angular/core';
import Butter from 'buttercms';

@Injectable({
  providedIn: 'root'
})
export class BlogService implements OnInit {

  hayResultado!: boolean;
  postsResultado!:any []

  constructor( ) {
    this.postsResultado = JSON.parse( localStorage.getItem( 'resultados' )! ) || [];
    this.hayResultado = JSON.parse( localStorage.getItem( 'hayResultado' )! );
  }


  ngOnInit(): void {
  }

  private _apiKeyButter:string = 'c467f42c1be121685dea20e7689ec4bfe35a3c7a';

 /* Variable query */
 query: any = ''




  /* Recupera todos los post */
  getAllPost() {
    return Butter(this._apiKeyButter).post.list()
  }

  /* Optener un post por la categoria ej "breakFast" */
  getCategorie( categoria: string  ){
    return Butter( this._apiKeyButter ).post.list( {
      "category_slug": `${categoria}`,
    } )
  }

  /* Recupera un post por el slug ej. "la-mejor-comida-latina" */
  getPost( slug: string ) {
    return Butter( this._apiKeyButter ).post.retrieve( slug )
  }
  /* Recupera los post relacionados por tags ej. "postres,pan" */
  getRelacionados( tag:string ) {
    return Butter( this._apiKeyButter ).post.list({
      "tag_slug": `${tag}`
    })
  }



  /* Buscar post por query */
  searchPosts( ) {
    // limpio el postResultado para poder implementar el loader
    this.postsResultado = []
    localStorage.setItem( 'resultados', JSON.stringify( this.postsResultado ) )
    return Butter( this._apiKeyButter ).post.search(  this.query  )
    .then( post => {

      // No hay resultados de busquedas
      if( !post.data.data.length) {
        this.hayResultado = false;
        this.postsResultado = []
        localStorage.setItem( 'resultados', JSON.stringify( this.postsResultado ) )
        localStorage.setItem( 'hayResultado',JSON.stringify( this.hayResultado ) )
        return;
      }else {
        // Hubo resultado de busqueda
        this.postsResultado = post.data.data
        this.hayResultado = true;
        localStorage.setItem( 'resultados', JSON.stringify( this.postsResultado ) )
        localStorage.setItem( 'hayResultado',JSON.stringify( this.hayResultado ) )

      }
    } )

    .catch(() => this.postsResultado = [])

  }
  }

