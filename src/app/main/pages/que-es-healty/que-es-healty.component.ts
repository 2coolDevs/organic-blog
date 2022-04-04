import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-que-es-healty',
  templateUrl: './que-es-healty.component.html',
  styleUrls: ['./que-es-healty.component.scss']
})
export class QueEsHealtyComponent implements OnInit {
  titulo:string = 'Quienes somos?'

  constructor() { }

  ngOnInit(): void {
  }

}
