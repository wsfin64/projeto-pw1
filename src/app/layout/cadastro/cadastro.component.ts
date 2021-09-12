import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../shared/model/usuario";
import {FormControl, Validators} from "@angular/forms";
import {UsuarioFirestoreService} from "../../shared/services/usuario-firestore.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  usuario: Usuario;
  operacaoCadastro = true;

  hide = true;


  constructor(private usuarioFirestoreService: UsuarioFirestoreService, private rotaAtual: ActivatedRoute, private roteador: Router) {
    this.usuario = new Usuario();

    if (this.rotaAtual.snapshot.paramMap.has('id')){
      this.operacaoCadastro = false;
      const idParaEdicao = this.rotaAtual.snapshot.paramMap.get('id');
      this.usuarioFirestoreService.pesquisarPorId(<string>idParaEdicao).subscribe(
        usuarioRetornado => this.usuario = usuarioRetornado
      )
    }

  }

  ngOnInit(): void {

  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  inserirUsuario(): void {
    if (this.usuario.id){
      this.usuarioFirestoreService.atualizar(this.usuario).subscribe(
        usuarioAlterado => {
          this.roteador.navigate(['listarusuarios'])
        }
      );
    } else {
      this.usuarioFirestoreService.inserir(this.usuario).subscribe(
        usuarioInserido => {
          this.roteador.navigate(['listarusuarios'])
        }
      )
    }
  }
}
