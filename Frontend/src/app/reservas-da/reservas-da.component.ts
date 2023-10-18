import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Reserva } from './reserva.model';


@Component({
  selector: 'app-reservas-da',
  templateUrl: './reservas-da.component.html',
  styleUrls: ['./reservas-da.component.css']
})
export class ReservasDaComponent {
  
  reservas : Reserva[] = [];
  
  
  constructor(private router: Router, private http: HttpClient) {}
  
  ngOnInit() {
    this.http.get<Reserva[]>('http://localhost:3000/reserva').subscribe({
      next: reservas => {
        this.reservas = reservas;
      },
      error: error => {
        console.error('Erro ao encontrar as Reservas', error);
      }
    });
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }
}
