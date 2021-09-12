export class Usuario {
  id?: string;
  nome?: string;
  cpf?: string;
  idade?: number;
  endereco?: string;
  email?: string;
  senha?: string;

  constructor(id?: string, usuario: Usuario = {}) {
    this.id = id;
    this.nome = usuario.nome;
    this.cpf = usuario.cpf;
    this.idade = usuario.idade;
    this.endereco = usuario.endereco;
    this.email = usuario.email;
    this.senha = usuario.senha;

  }

}


