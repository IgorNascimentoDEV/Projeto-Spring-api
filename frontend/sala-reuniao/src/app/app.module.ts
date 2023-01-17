import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarSalaComponent } from './criar-sala/criar-sala.component';
import { SalaDetalhesComponent } from './sala-detalhes/sala-detalhes.component';
import { DetalhesSalaComponent } from './detalhes-sala/detalhes-sala.component';
import { ListaSalaComponent } from './lista-sala/lista-sala.component';
import { AtualizarSalaComponent } from './atualizar-sala/atualizar-sala.component';

@NgModule({
  declarations: [
    AppComponent,
    CriarSalaComponent,
    SalaDetalhesComponent,
    DetalhesSalaComponent,
    ListaSalaComponent,
    AtualizarSalaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
