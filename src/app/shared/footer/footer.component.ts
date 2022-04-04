import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <section>
      <div class="container wrap-content-max">
       <div class="row d-flex justify-content-between align-items-center ">
             <div class="col-12 col-md-4 mb-3 mb-md-0">
                <article class="logo"> <h1>Healty</h1> </article>
              </div>
              <div class="col-12 col-md-8 align-self-end text-center">
                    <p>© 2022 <code><a href="https://github.com/2coolDevs" target="_blank">2coolDevs</a><i class="fa-solid fa-snake"></i></code>. Todos los derechos reservados.</p>
              </div>
       </div>
      </div>
    </section>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
