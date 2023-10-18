import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Veiculo } from './veiculo.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-veiculos-da',
  templateUrl: './veiculos-da.component.html',
  styleUrls: ['./veiculos-da.component.css']
})
export class VeiculosDaComponent {

  veiculos : Veiculo[] = [];

  
  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Veiculo[]>('http://localhost:3000/veiculo').subscribe({
      next: veiculos => {
        this.veiculos = veiculos;
      },
      error: error => {
       console.error('Erro ao encontrar os veiculos', error);
      }
    });
  }


  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }
}
