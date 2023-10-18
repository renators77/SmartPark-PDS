import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Parque } from '../parques/parque.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lugares-disponiveis',
  templateUrl: './lugares-disponiveis.component.html',
  styleUrls: ['./lugares-disponiveis.component.css']
})
export class LugaresDisponiveisComponent {
  constructor(private router: Router, private http: HttpClient) {}

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

  parques : Parque[] = [];

  ngOnInit() {
    this.http
      .get<Parque[]>('http://localhost:3000/estatistica/occupationparques')
      .subscribe({
        next: parques => {
          this.parques = parques;
        },
        error: error => {
         console.error('Erro ao encontrar os Parques', error);
        }
      });
  }
}
