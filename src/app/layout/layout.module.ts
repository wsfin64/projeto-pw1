import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { TelaComponent } from './tela/tela.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { CadastroComponent } from './cadastro/cadastro.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatInputModule} from "@angular/material/input";
import { ListagemUsuarioComponent } from './listagem-usuario/listagem-usuario.component';
import {RouterModule} from "@angular/router";
import { TelaIncialComponent } from './tela-incial/tela-incial.component';


function AppRoutingModule() {

}

@NgModule({
    declarations: [
        MenuComponent,
        TelaComponent,
        CadastroComponent,
        ListagemUsuarioComponent,
        TelaIncialComponent,
    ],
  exports: [
    TelaComponent,
    MenuComponent,
    CadastroComponent,
    ListagemUsuarioComponent,
    TelaIncialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class LayoutModule { }
