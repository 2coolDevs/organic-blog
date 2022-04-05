import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-post-reciente',
  templateUrl: './post-reciente.component.html',
  styleUrls: ['./post-reciente.component.scss']
})
export class PostRecienteComponent {

constructor() { }

  @Input() post: any
  }

