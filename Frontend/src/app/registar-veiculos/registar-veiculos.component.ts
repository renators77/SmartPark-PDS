import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Veiculo } from '../veiculos-da/veiculo.model';

@Component({
  selector: 'app-registar-veiculos',
  templateUrl: './registar-veiculos.component.html',
  styleUrls: ['./registar-veiculos.component.css']
})
export class RegistarVeiculosComponent {
  constructor(private router: Router, private http: HttpClient) {}

  matricula: any;
  userID: any;

  veiculos : Veiculo[] = [];

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
  }


  postMethod() {

    let header = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    // Obtenha o userID do localStorage
    this.userID = localStorage.getItem('UserID');
    console.log(Number(this.userID));
    //create the body
    let body = {
      UserID: Number(this.userID),
      ValorMatricula: this.matricula
    };

    this.http
      .post('http://localhost:3000/veiculo/create', body, { headers: header })
      .subscribe({
        next: () => {
          console.log('Veículo registrado com sucesso');
          // Redirecione para a página de sucesso ou faça qualquer outra ação necessária
        },
        error: (error) => {
          console.error('Erro ao registrar o veículo:', error);
          // Trate o erro de acordo com suas necessidades
        },
      });
  }


  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
}
}
