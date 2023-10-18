import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent {
  constructor(private router: Router, private http:HttpClient) {}

  public getMultas:any;
  public getReservas:any;
  public getUsers:any;
  public getMovimentos:any;
  public getVeiculos:any;

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

  public getMultasBackend() {
    this.http.get('http://localhost:3000/estatistica/numberofmultas').subscribe((data) => {
      
      this.getMultas = data;
    });
  }

  public getReservasBackend() {
    this.http.get('http://localhost:3000/estatistica/numberofreservas').subscribe((data) => {
     
      this.getReservas = data;
    });
  }

  public getUsersBackend() {
    this.http.get('http://localhost:3000/estatistica/numberofusers').subscribe((data) => {
     
      this.getUsers = data;
    });
  }

  public getMovimentosBackend() {
    this.http.get('http://localhost:3000/estatistica/numberofmovimentos').subscribe((data) => {
     
      this.getMovimentos = data;
    });
  }

  public getVeiculosBackend() {
    this.http.get('http://localhost:3000/estatistica/numberofveiculos').subscribe((data) => {
      
      this.getVeiculos = data;
    });
  }

  ngOnInit() {
    this.getMultasBackend();
    this.getReservasBackend();
    this.getMovimentosBackend();
    this.getUsersBackend();
    this.getVeiculosBackend();
  }
}
