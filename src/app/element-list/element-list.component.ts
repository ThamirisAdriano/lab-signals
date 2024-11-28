import { Component } from '@angular/core';
import { ElementoService, Elemento } from '../elemento.service';

@Component({
  selector: 'app-element-list',
  templateUrl: './element-list.component.html',
  styleUrls: ['./element-list.component.css']
})
export class ElementListComponent {

  constructor(public elementoService: ElementoService) {}

  selecionarElemento(elemento: Elemento){
    this.elementoService.selecionarElemento(elemento)
  }

  alternarFavorito(elemento: Elemento) {
    if (this.elementoService.obterFavoritos().includes(elemento)) {
      this.elementoService.removerFavoritos(elemento)
    } else {
      this.elementoService.adicionarFavorito(elemento)
    }
  } 

}
