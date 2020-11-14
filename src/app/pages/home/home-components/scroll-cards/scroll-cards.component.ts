import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-cards',
  templateUrl: './scroll-cards.component.html',
  styleUrls: ['./scroll-cards.component.scss'],
})
export class ScrollCardsComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  cargarData(event) {
    console.log('event  cargando:>> ', event);
  }

}
