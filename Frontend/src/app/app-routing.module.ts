import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistarComponent } from './registar/registar.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
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
import { AuthGuardGuard } from './Core/guards/auth-guard.guard';
import { IsAdminGuard } from './Core/guards/is-admin.guard';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Registar', component: RegistarComponent },
  { path: 'Dashboard-user', component: DashboardUserComponent , canActivate: [AuthGuardGuard]},
  { path: 'Dashboard-admin', component: DashboardAdminComponent, canActivate: [AuthGuardGuard,IsAdminGuard] },
  { path: 'Alertas-da', component: AlertasDaComponent,canActivate: [AuthGuardGuard,IsAdminGuard]},
  { path: 'Reservas-da', component: ReservasDaComponent,canActivate: [AuthGuardGuard,IsAdminGuard]},
  { path: 'Contact', component:ContactComponent},
  { path: 'Estatisticas', component: EstatisticasComponent},
  { path: 'LugaresDisponiveis', component: LugaresDisponiveisComponent, canActivate: [AuthGuardGuard]},
  { path: 'Reservas', component:ReservasComponent, canActivate: [AuthGuardGuard]},
  { path: 'Veiculos', component:VeiculosComponent, canActivate: [AuthGuardGuard]},
  { path: 'RegistarVeiculos', component:RegistarVeiculosComponent, canActivate: [AuthGuardGuard]},
  { path: 'Utilizadores', component:UtilizadoresComponent,canActivate: [AuthGuardGuard,IsAdminGuard]},
  { path: 'Veiculos-da', component:VeiculosDaComponent,canActivate: [AuthGuardGuard,IsAdminGuard]},
  { path: 'Parques', component:ParquesComponent,canActivate: [AuthGuardGuard,IsAdminGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
