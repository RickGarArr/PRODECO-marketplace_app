import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slide-anuncios',
  templateUrl: './slide-anuncios.component.html',
  styleUrls: ['./slide-anuncios.component.scss'],
})
export class SlideAnunciosComponent implements OnInit {

  @Input() anuncios: any[] = [];

  constructor(  ) { }

  ngOnInit() {}

  verPaginaAnuncio(event) {
    console.log('evento', event);
  }
}
