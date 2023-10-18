import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Parque } from '../parques/parque.model';
import { Veiculo } from '../veiculos-da/veiculo.model';
import { Reserva } from '../reservas-da/reserva.model';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css'],
})
export class ReservasComponent {
  constructor(private router: Router, private http: HttpClient) {}
  parques : Parque[] = [];
  veiculos : Veiculo[] = [];
  reservas : Reserva[] = [];

  public selectedDateEntrada: any;
  public selectedTimeEntrada: any;
  public selectedDateSaida: any;
  public selectedTimeSaida: any;
  public selectedVeiculo: any;
  public selectedParque: any;


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
      .get<Parque[]>('http://localhost:3000/estatistica/occupationparques')
      .subscribe({
        next: parques => {
          this.parques = parques;
        },
        error: error => {
         console.error('Erro ao encontrar os Parques', error);
        }
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
      
  }

  fazerReserva() {
    let header = new HttpHeaders({
      contentType: 'application/json',
    });

    //data entrada
    const combinedDateTimeStringEntrada =
      this.selectedDateEntrada + 'T' + this.selectedTimeEntrada + ':00Z';
    const combinedDateTimeEntrada = new Date(combinedDateTimeStringEntrada);
    const formattedDateTimeEntrada = combinedDateTimeEntrada.toISOString();

    //data saida 
    const combinedDateTimeStringSaida =
    this.selectedDateSaida + 'T' + this.selectedTimeSaida + ':00Z';
  const combinedDateTimeSaida = new Date(combinedDateTimeStringSaida);
  const formattedDateTimeSaida = combinedDateTimeSaida.toISOString();

  //passar o userid para numero
  var userIDNumber = Number(localStorage.getItem('UserID'))
  let body = {
    DataInicio: formattedDateTimeEntrada,
    DataFim: formattedDateTimeSaida,
    LoginId: userIDNumber,
    ParqueID: Number(this.selectedParque),
    VeiculoID: Number(this.selectedVeiculo),
    EstadoReserva: "Invalida"
  }

  this.http
  .post('http://localhost:3000/reserva', body , { headers: header })
  .subscribe({
    next: reserva => {
      console.log("FUNCIONOU");
      //TODO: meter aqui para limpar os campos ou rederecionar para outra pagina 
    },
    error: error => {
     console.error('Erro ao encontrar os veiculos', error);
    }
  });

    console.log(formattedDateTimeEntrada);
    console.log(formattedDateTimeSaida);
    console.log(userIDNumber);
    console.log(Number(this.selectedVeiculo)); 
    console.log( Number(this.selectedParque)); 
  }
}
