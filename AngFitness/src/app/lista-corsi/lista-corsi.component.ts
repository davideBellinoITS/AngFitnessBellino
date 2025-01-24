import { Component, inject, OnInit, signal } from '@angular/core';
import { CorsiService } from '../services/corsi.service';
import { CorsoComponent } from './corso/corso.component';
import { Corso } from '../models/corso.model';


@Component({
  selector: 'app-lista-corsi',
  standalone: true,
  imports: [CorsoComponent],
  templateUrl: './lista-corsi.component.html',
  styleUrl: './lista-corsi.component.css'
})
export class ListaCorsiComponent implements OnInit {

  private corsiService = inject(CorsiService)


  corsi = this.corsiService.fetchedCorsi;
  /* caricamento dei corsi all'avvio */
  ngOnInit(): void {
    this.corsiService.loadCorsi()
  }




}
