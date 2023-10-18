import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private showDashboardAdminButton = false;
  private showDashboardUserButton = false;

  setShowDashboardAdminButton(show: boolean) {
    this.showDashboardAdminButton = show;
  }

  getShowDashboardAdminButton() {
    return this.showDashboardAdminButton;
  }

  setShowDashboardUserButton(show: boolean) {
    this.showDashboardUserButton = show;
  }

  getShowDashboardUserButton() {
    return this.showDashboardUserButton;
  }

  private showLoginRegisterButton = true;

  setShowLoginRegisterButton(show: boolean) {
    this.showLoginRegisterButton = show;
  }

  getShowLoginRegisterButton() {
    return this.showLoginRegisterButton;
  }

  private showlogoutbutton = false;

  setShowlogoutbutton(show: boolean) {
    this.showlogoutbutton = show;
  }

  getShowlogoutbutton() {
    return this.showlogoutbutton;

  }

  clearAuthentication() {
    // Limpar o estado de autenticação
    localStorage.removeItem('Permissao');
    localStorage.removeItem('Token');
  }

  updateButtonVisibility() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const permissao = localStorage.getItem('Permissao');
    
    if (isLoggedIn) {
      this.showlogoutbutton = true; // Mostrar botão de Logout
      this.showLoginRegisterButton = false; // Ocultar botão de Login/Registro
      
      if (permissao === '1' || permissao === '2') {
        this.showDashboardAdminButton = true; // Mostrar botão do Dashboard Admin
        this.showDashboardUserButton = true; // Mostrar botão do Dashboard User
      } else {
        this.showDashboardAdminButton = false; // Ocultar botão do Dashboard Admin
        this.showDashboardUserButton = true; // Mostrar botão do Dashboard User
      }
    } else {
      this.showlogoutbutton = false; // Ocultar botão de Logout
      this.showLoginRegisterButton = true; // Mostrar botão de Login/Registro
      this.showDashboardAdminButton = false; // Ocultar botão do Dashboard Admin
      this.showDashboardUserButton = false; // Ocultar botão do Dashboard User
    }
  }
  
}
