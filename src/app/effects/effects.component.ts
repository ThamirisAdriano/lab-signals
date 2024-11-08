import { Component } from '@angular/core';
import { ElementoService, Elemento } from './../elemento.service';

@Component({
  selector: 'app-effects',
  templateUrl: './effects.component.html',
  styleUrls: ['./effects.component.css']
})
export class EffectsComponent {
  constructor(public elementoService: ElementoService) {}

  selecionarElemento(elemento: Elemento) {
    this.elementoService.selecionarElemento(elemento);
  }

  ajustarTemperatura(novaTemperatura: number) {
    this.elementoService.ajustarTemperatura(novaTemperatura);
  }
}
