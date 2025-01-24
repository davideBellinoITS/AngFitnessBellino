import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { CorsiComponent } from './corsi/corsi.component';
import { AmministrazioneComponent } from './amministrazione/amministrazione.component';



export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'chiSiamo', component: ChiSiamoComponent },
    { path: 'corsi', component: CorsiComponent },
    { path: 'amministrazione', component: AmministrazioneComponent },
    // { path: '**', redirectTo: 'not-found' } 
];
