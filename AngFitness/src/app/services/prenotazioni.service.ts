import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Prenotazione } from '../models/prenotazione.model';

@Injectable({
  providedIn: 'root'
})
export class PrenotazioniService {

  constructor() { }

  private httpClient = inject(HttpClient)

  /* funzione per richiedere prenotazioni al backend  */
  public fetchPrenot() {
    return this.httpClient.get<Prenotazione[]>('http://localhost:3000/prenotazioni');
  }

  /* funzione per aggiungere prenotazioni al backend */
  public addPrenot(body: any) {
    return this.httpClient.post('http://localhost:3000/prenotazioni', body);
  }

}
