import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {CadastroComponent} from "./layout/cadastro/cadastro.component";
import {AppComponent} from "./app.component";
import {TelaIncialComponent} from "./layout/tela-incial/tela-incial.component";
import {ListagemUsuarioComponent} from "./layout/listagem-usuario/listagem-usuario.component";

const routes: Routes = [
  { path: "", component: TelaIncialComponent},
  { path: "cadastrar", component: CadastroComponent },
  { path: "listarusuarios", component: ListagemUsuarioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}
