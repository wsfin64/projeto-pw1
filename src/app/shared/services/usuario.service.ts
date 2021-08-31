import { Injectable } from '@angular/core';
import {Usuario} from "../model/usuario";
import {USUARIOS} from "../model/USUARIOS";
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  URL_USUARIOS = "http://localhost:3000/usuarios";

  constructor(private httpClient: HttpClient) {

  }

  listar(): Observable<Array<Usuario>>{
    return this.httpClient.get<Array<Usuario>>(this.URL_USUARIOS);
  }

  inserir(novoUsuario: Usuario): Observable<Usuario>{
    return this.httpClient.post<Usuario>(this.URL_USUARIOS, novoUsuario);
  }
}
