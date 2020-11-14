import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CategoriasComponent } from './categorias/categorias.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { ScrollCardsComponent } from './scroll-cards/scroll-cards.component';
import { SlideAnunciosComponent } from './slide-anuncios/slide-anuncios.component';

@NgModule({
  declarations: [
    CategoriasComponent,
    OfertasComponent,
    ScrollCardsComponent,
    SlideAnunciosComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CategoriasComponent,
    OfertasComponent,
    ScrollCardsComponent,
    SlideAnunciosComponent
  ]
})
export class HomeComponentsModule { }
