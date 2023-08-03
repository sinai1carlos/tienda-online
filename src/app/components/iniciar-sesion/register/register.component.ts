import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user:Usuario = new Usuario();

  constructor(private usuarioServicio:UsuarioService){}

  formSubmit(){
    console.log(this.user);
    this.guardarUsuario();
  }

  guardarUsuario(){
    this.usuarioServicio.registrarUsuario(this.user).subscribe((dato:any)=>{
      console.log(dato);
      
    });
  }
}
