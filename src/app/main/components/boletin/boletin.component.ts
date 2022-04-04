import { Component} from '@angular/core';

@Component({
  selector: 'app-boletin',
  template: `
    <section>
      <div class="row px-3 w-100 d-flex justify-content-between">

      <div class="col-12 col-md-6 flex-column align-item-center text-center text-md-start mb-4 mb-md-0">
          <h2>Quieres estar al tanto de nuevas recetas?</h2>
          <p>Subscribete a nuestro boletín infórmativo es grátis!</p>
        </div>

      <div class="col-12 col-md-6 ">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="tu email" />
            <button class="btn  btn-primary" type="button" id="button-addon1">
              Subscribirse
            </button>
          </div>
        </div>


      </div>
    </section>
  `,
  styles: [
    `
      section {
        background-color: #ebf2eb;
        /* height: 7rem; */
        display: flex;
        justify-content: center;
        align-items: center;
        /* margin-bottom: 6rem; */
        padding: 1rem;
      }

      button {
        margin-left: 0.5rem !important;
        height: 100% !important;
        border-radius: 0 !important;
        background-color: #71ac84 !important ;
        border: none !important;
        outline: none !important;
      }

      button:focus {
        border: none !important;
        box-shadow: none !important;
      }

      button:active {
        border: none !important;
        box-shadow: none !important;
        transform: scale(0.9, 0.9);
      }

      .form-control:focus {
        box-shadow: none !important;
        border-color: #71ac84 !important;
      }

      p {
        color: #a5b4a9;
        font-size: .9rem

      }

      h2 {
      font-family: Arial, Helvetica, sans-serif;
      font-weight: bold;
      font-size: 1.3rem;
      }
    `,
  ],
})
export class BoletinComponent {

}
