import { Component } from '@angular/core';
import { IRegistrazione } from '../musica';
import { MUSICA } from './lista-musica.component';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css'],
})
export class MusicaComponent {
  musica = MUSICA;
  musicaSelezionata?: IRegistrazione;
  immagineVisibile?: boolean = true;

  seleziona(musica: IRegistrazione) {
    this.musicaSelezionata = musica;
  }

  mostraImmagine() {
    this.immagineVisibile = !this.immagineVisibile;
    if (this.immagineVisibile) {
    }
  }
}
