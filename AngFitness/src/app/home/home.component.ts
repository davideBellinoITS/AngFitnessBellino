import { Component, inject, signal } from '@angular/core';
import { CorsiService } from '../services/corsi.service';
import { Corso } from '../models/corso.model';
import { CorsoComponent } from '../lista-corsi/corso/corso.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CorsoComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent {

  private corsiService = inject(CorsiService)
  
  
    fewCourses = signal<Corso[]>([])
  /* funzione che all'avvio richiama funzione per prendere tutti i corsi dal backend
  e li setta su fewCourses
  */
    ngOnInit(): void {
      this.corsiService.fetchCorsi()
      .subscribe({
       next: (data=>{console.log(data)
        this.fewCourses.set(data.slice(0, 4))

       })
      })
    }

}
