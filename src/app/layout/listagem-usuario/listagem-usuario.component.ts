import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../shared/model/usuario";
import {UsuarioFirestoreService} from "../../shared/services/usuario-firestore.service";

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.component.html',
  styleUrls: ['./listagem-usuario.component.css']
})
export class ListagemUsuarioComponent implements OnInit {

  usuarios!: Array<Usuario>;

  constructor(private usuarioFirestoreService: UsuarioFirestoreService) {
  }

  ngOnInit(): void {
    this.usuarioFirestoreService.listar().subscribe(
      usuariosResposta => this.usuarios = usuariosResposta
    );
  }

}
