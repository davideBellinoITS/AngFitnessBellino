import { Component } from '@angular/core';
import { ListaCorsiComponent } from "../lista-corsi/lista-corsi.component";
import { ModalComponent } from './modal/modal.component';
import { ListaPrenotazioniComponent } from './lista-prenotazioni/lista-prenotazioni.component';

@Component({
  selector: 'app-amministrazione',
  standalone: true,
  imports: [ListaCorsiComponent, ModalComponent, ListaPrenotazioniComponent],
  templateUrl: './amministrazione.component.html',
  styleUrl: './amministrazione.component.css'
})
export class AmministrazioneComponent {

  openModal = false;
  /* funzione richiamata per aprire il modale dopo aver premuto il bottone 'aggiungi corso'  */
  addCorso() {
    this.openModal = !this.openModal;
  }
  /* funzione che richiude il modale */
  onClosedModal() {
    this.openModal = !this.openModal;

  }


}
