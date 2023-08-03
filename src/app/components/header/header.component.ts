import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn!: boolean; // Variable para controlar si el usuario ha iniciado sesión o no

  constructor() { }

  ngOnInit(): void {
    // Aquí podrías agregar la lógica para verificar si el usuario ha iniciado sesión y cambiar el valor de isLoggedIn en consecuencia
    // Por ejemplo, si estás usando un servicio de autenticación, puedes suscribirte a los cambios del estado de autenticación
    // y actualizar isLoggedIn en función del estado actual.
    // Ejemplo: this.authService.isLoggedIn().subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn);
    this.isLoggedIn = false; // Esto es solo un ejemplo, establece el valor real aquí.
  }
}
