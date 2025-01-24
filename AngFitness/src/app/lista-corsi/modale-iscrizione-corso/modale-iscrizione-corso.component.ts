import { Component, inject, input, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Corso } from '../../models/corso.model';
import { CorsiService } from '../../services/corsi.service';
import { PrenotazioniService } from '../../services/prenotazioni.service';

@Component({
  selector: 'app-modale-iscrizione-corso',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modale-iscrizione-corso.component.html',
  styleUrl: './modale-iscrizione-corso.component.css'
})
export class ModaleIscrizioneCorsoComponent {

  corso = input.required<Corso>();
  private corsiService = inject(CorsiService)
  private prenotazioniService = inject(PrenotazioniService)




  closeSubscribeModal = output();
  onSubscribe = output();

  emptyForm = false;

  /* funzione che permette la chiusura del modale tramite emit */
  onCloseSubscribeModal() {
    this.closeSubscribeModal.emit();
  }

/* oggetto form */
  subscriptionForm = new FormGroup({

    nomeUtente: new FormControl('', {
      validators: [
        Validators.required],
    }),
    cognomeUtente: new FormControl('', {
      validators: [
        Validators.required],
    }),

  });

/* funzione per il controllo della validità dei valori inseriti */
  get isNameValid() {
    return this.subscriptionForm.controls.nomeUtente.invalid && this.subscriptionForm.controls.nomeUtente.touched;
  }
  get isSurnameValid() {
    return this.subscriptionForm.controls.cognomeUtente.invalid && this.subscriptionForm.controls.cognomeUtente.touched;
  }


  onSubmit() {
        /* se il form non è valido this.emptyForm viene setatto a true che farà visualizzare errore su file html */
    if (this.subscriptionForm.invalid) {
      console.log('Il form non è valido!');
      console.log(this.subscriptionForm);
      this.emptyForm = true;
      return

    }
        /* se form è valido this.emptyForm viene settato a false e non farà visualizzare errore */
    this.emptyForm = false;

    this.onSubscribe.emit();
    this.closeSubscribeModal.emit();

    console.log('form inviato');

    console.log(this.subscriptionForm.value);
    const formData = {
      ...this.subscriptionForm.value,
      nomeCorso: this.corso().nome,
    };

/* se il numero di iscritti è minore della capacita di iscritti del corso aumenta di uno il numero di iscritti e aggiunge prenotazione al backend inserendo i valori inseriti*/
    if (this.corso().iscritti < this.corso().capacitaMax) {
      const newIscritto = this.corso().iscritti + 1;
      this.corsiService.modifyCorso(this.corso().id, { iscritti: newIscritto })
        .subscribe({
          next: (data) => {
            console.log(data)
            this.corso().iscritti = newIscritto;

          }

        })

      this.prenotazioniService.addPrenot(formData)
        .subscribe({
          next: (data) => {
            console.log(data)

          }

        })
    }

    /* modifica la disponibilita del corso se raggiunge capienza massima */
    if (this.corso().iscritti == this.corso().capacitaMax - 1) {
      this.corso().disponibilita = false;

      this.corsiService.modifyCorso(this.corso().id, { disponibilita: false })
        .subscribe({
          next: (data) => {
            console.log(data);
          }
        })
    }







  }


}
