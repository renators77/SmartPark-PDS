import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegistarComponent } from './registar/registar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { HomeComponent } from './home/home.component';
import { EstatisticasComponent } from './estatisticas/estatisticas.component';
import { LugaresDisponiveisComponent } from './lugares-disponiveis/lugares-disponiveis.component';
import { ReservasComponent } from './reservas/reservas.component';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { RegistarVeiculosComponent } from './registar-veiculos/registar-veiculos.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { AlertasDaComponent } from './alertas-da/alertas-da.component';
import { ReservasDaComponent } from './reservas-da/reservas-da.component';
import { UtilizadoresComponent } from './utilizadores/utilizadores.component';
import { VeiculosDaComponent } from './veiculos-da/veiculos-da.component';
import { ParquesComponent } from './parques/parques.component';
import { PopupAdicionarComponent } from './popup-adicionar/popup-adicionar.component';
import { PopupEditarComponent } from './popup-editar/popup-editar.component';
import { HttpClientModule } from '@angular/common/http';
import { PopupVeiculoComponent } from './popup-veiculo/popup-veiculo.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegistarComponent,
    FooterComponent,
    DashboardUserComponent,
    HomeComponent,
    EstatisticasComponent,
    LugaresDisponiveisComponent,
    ReservasComponent,
    VeiculosComponent,
    RegistarVeiculosComponent,
    ContactComponent,
    DashboardAdminComponent,
    AlertasDaComponent,
    ReservasDaComponent,
    UtilizadoresComponent,
    VeiculosDaComponent,
    ParquesComponent,
    PopupAdicionarComponent,
    PopupEditarComponent,
    PopupVeiculoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
