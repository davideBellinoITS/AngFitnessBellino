# AngFitness
Applicazione angular per l'utilizzo dei servizi di una palestra e la gestione amministrativa

---

## 1. Titolo
**AngFitness**  
Un'applicazione web per gestire programmi di allenamento e migliorare il benessere fisico.

---

## 2. Descrizione
AngFitness è un'applicazione web sviluppata con Angular per fornire agli utenti la possibilità di gestire e prenotare i corsi disponibili all'interno della palestra.
Nella **Home** , gli utenti trovano una breve introduzione alla palestra, che presenta i corsi principali offerti. Nella sezione **Chi Siamo** , è presente una spiegazione dettagliata della palestra, che spiega le funzionalità dei moderni macchinari presenti, ed espospone i servizi aggiuntivi.
Gli utenti possono visualizzare i corsi disponibili e prenotarne uno o più di uno, a condizione che ci siano posti disponibili, semplicemente inserendo il proprio nome e cognome.
Nella sezione **Amministrazione** , i gestori della palestra hanno la possibilità di aggiungere nuovi corsi fornendo tutte le informazioni necessarie, eliminare corsi esistenti tramite l'apposito bottone e visualizzare la lista completa degli utenti prenotati ai vari corsi.

---

## 3. Versione tecnologie utilizzate
Angular CLI: 18.2.12  
Typescript:  5.6.3
Node: 22.11.0  
Package Manager: npm 10.9.0  
Json-server: 1.0.0-beta.3

---

## 4. Installazione

1. Clona il repository:
   ```bash
   git clone https://github.com/davideBellinoITS/AngFitnessBellino
 
2. Vai nella directory del progetto:

```bash
cd AngFitness
```
 
3. Installa le dipendenze:

```bash
npm install
```
 
3. Avvia l'applicazione inserendo in console:

```bash
ng serve -o
```
 
4. Apri il browser.
```bash
vai su `http://localhost:4200`
```

5. Cambia cartella.
```bash
cd ..\angFitnessBackend\
```

6. Avvia il backend inserendo in console .
```bash
json-server --watch db.json -s ./images
```
7. Riaggiorna.
```bash
Riaggiorrna la pagina del browser
```


## 5. Struttura del Progetto 


```bash
AngFitenessBellino/
├── AngFitness/                # Componenti principali
        public/
        ├── images/               #Cartella con immagini
        src/
        ├── app/                # Componenti principali
        ├── styles.css          # Stili globali
        └── index.html          # File HTML principale

AngFitenessBackend/
├── AngFitness/                # Componenti principali
        public/
        ├── images/               #Cartella con immagini
        db.json                   #file del database

README.md                      #file che stai leggendo in questo momento
        
```


---

## 6. Licenza 
Questo progetto è distribuito sotto la licenza MIT.

---
