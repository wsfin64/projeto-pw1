import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../shared/model/usuario";
import {FormControl, Validators} from "@angular/forms";
import {UsuarioService} from "../../shared/services/usuario.service";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  usuario: Usuario;
  hide = true;


  constructor(private usuarioService: UsuarioService) {
    this.usuario = new Usuario();

  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  inserirUsuario(): void {
    this.usuarioService.inserir(this.usuario).subscribe(
      usuario => console.log(usuario)
    );
    this.usuario = new Usuario();
  }
}
