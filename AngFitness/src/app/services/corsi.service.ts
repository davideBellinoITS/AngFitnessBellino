import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Corso } from '../models/corso.model';

@Injectable({
  providedIn: 'root'
})
export class CorsiService {

  constructor() { }

  private httpClient = inject(HttpClient)

  private corsi = signal<Corso[]>([])

  loadCorsi() {
    this.fetchCorsi()
      .subscribe({
        next: (data) => {
          this.corsi.set(data)
        }
      })
  }

  fetchedCorsi = this.corsi.asReadonly();


  /* funzione per richiedere corsi al backend */
  public fetchCorsi() {
    return this.httpClient.get<Corso[]>('http://localhost:3000/corsi');
  }

  /* funzione per eliminare un corso dal backend */
  public deleteCorso(id: string) {

    this.corsi.update(corso => corso.filter(u => u.id !== id))

    return this.httpClient.delete(`http://localhost:3000/corsi/${id}`)
  }

  /* funzione per aggiungere un corso al backend */
  public addCorso(body: any) {
    this.corsi.update(corsi => [...corsi, body]);

    return this.httpClient.post('http://localhost:3000/corsi', body);
  }
  /* funzione per fare update dei valori di un corso */
  public modifyCorso(id: string, body: any) {
    return this.httpClient.patch(`http://localhost:3000/corsi/${id}`, body)
  }








}
