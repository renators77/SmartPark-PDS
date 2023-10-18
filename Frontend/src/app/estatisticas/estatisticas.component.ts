import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Veiculo } from '../veiculos-da/veiculo.model';
import { Reserva } from '../reservas-da/reserva.model';
import { Multa } from '../alertas-da/alertas-da.model';

@Component({
  selector: 'app-estatisticas',
  templateUrl: './estatisticas.component.html',
  styleUrls: ['./estatisticas.component.css']
})
export class EstatisticasComponent {
  constructor(private router: Router, private http:HttpClient) {}
  veiculos : Veiculo[] = [];
  reservas : Reserva[] = [];
  multas : Multa[] = [];
  
  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
    
  }

  ngOnInit() {
    var userID = localStorage.getItem('UserID');
    var userIDNumber = Number(userID); // Using Number()

    let header = new HttpHeaders({
      contentType: 'application/json',
    });

    this.http
    .post<Veiculo[]>('http://localhost:3000/veiculo/findUserVeiculos', {UserID: userIDNumber } , { headers: header })
    .subscribe({
      next: veiculos => {
        this.veiculos = veiculos;
      },
      error: error => {
       console.error('Erro ao encontrar os veiculos', error);
      }
    });

    this.http.get<Reserva[]>(`http://localhost:3000/reserva/${userIDNumber}`).subscribe({
        next: reservas => {
          this.reservas = reservas;
        },
        error: error => {
          console.error('Erro ao encontrar as Reservas', error);
        }
      });

    this.http.get<Multa[]>(`http://localhost:3000/multa/${userIDNumber}`).subscribe({
        next: multas => {
          this.multas = multas;
        },
        error: error => {
          console.error('Erro ao encontrar as Reservas', error);
        }
      }); 
  }
}

