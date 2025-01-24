import { Component, inject, input } from '@angular/core';
import { Corso } from '../../models/corso.model';
import { Location } from '@angular/common';
import { CorsiService } from '../../services/corsi.service';
import { ModaleIscrizioneCorsoComponent } from '../modale-iscrizione-corso/modale-iscrizione-corso.component';
import { PrenotazioniService } from '../../services/prenotazioni.service';

@Component({
  selector: 'app-corso',
  standalone: true,
  imports: [ModaleIscrizioneCorsoComponent],
  templateUrl: './corso.component.html',
  styleUrl: './corso.component.css'
})
export class CorsoComponent {

  private corsiService = inject(CorsiService)

  corso = input.required<Corso>();

  openModalSubscription = false;

  path: string = '';

  constructor(private location: Location) {
    this.path = this.location.path();
    console.log('Current Path:', this.path);
  }

  /* for amminitration */
  /* funzione per eliminare unn corso dal backend, disponibile solo in pagina amministrazione */
  deleteCorso(id: string) {
    console.log('cancellato 1');
    this.corsiService.deleteCorso(id)
      .subscribe({
        next: (data => {
          console.log(data);
        })
      })
  }

  /* for client */
  /* gestione apertura modale in caso capienza massima utenti per corso */
  handleSubscribeModal() {
    if (this.corso().iscritti < this.corso().capacitaMax) {
      this.openModalSubscription = !this.openModalSubscription
    }
  }
}


