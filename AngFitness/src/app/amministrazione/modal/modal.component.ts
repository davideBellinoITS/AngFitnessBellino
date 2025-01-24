import { Component, inject, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CorsiService } from '../../services/corsi.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  private corsiService = inject(CorsiService);

  closeModal = output();

  emptyForm = false;




  /* funzione che richiude il modale */
  onCloseModal() {
    this.closeModal.emit();
  }

  /* oggetto form */
  form = new FormGroup({

    nome: new FormControl('', {
      validators: [
        Validators.required,
      ],
    }),
    descrizione: new FormControl('', {
      validators: [
        Validators.required,
      ],
    }),
    istruttore: new FormControl('',
      {
        validators: [
          Validators.required,
        ]
      }),
    durata: new FormControl('',
      {
        validators: [
          Validators.required,
        ]
      }),
    capacita: new FormControl('',
      {
        validators: [
          Validators.required,
        ]
      }),
    immagine: new FormControl('',
      {
        validators: [
          Validators.required,
        ]
      })
  });

  /* funzioni che controllano la validita dei dati inseriti */
  get isNameValid() {
    return this.form.controls.nome.invalid && this.form.controls.nome.touched;
  }
  get isDescriptionValid() {
    return this.form.controls.descrizione.invalid && this.form.controls.descrizione.touched;
  }
  get isIstructorValid() {
    return this.form.controls.istruttore.invalid && this.form.controls.istruttore.touched;
  }
  get isDurationValid() {
    return this.form.controls.durata.invalid && this.form.controls.durata.touched;
  }
  get isCapacityValid() {
    return this.form.controls.capacita.invalid && this.form.controls.capacita.touched;
  }




  /* all'invio */
  onSubmit() {
    /* se il form non è valido this.emptyForm viene setatto a true che farà visualizzare errore su file html */
    if (this.form.invalid) {
      console.log('Il form non è valido!');
      console.log(this.form);
      this.emptyForm = true;
      console.log(this.emptyForm);

      return
    }
    /* se form è valido this.emptyForm viene settato a false e non farà visualizzare errore */
    this.emptyForm = false;

    console.log(this.form.value);
    /* richiamata funzione per aggiungere il corso al backend passando i relativi valori inseriti dall'utente */
    this.corsiService.addCorso(this.form.value)
      .subscribe({
        next: (data => {
          console.log(data)
          this.closeModal.emit()
        })
      })



  }



}


