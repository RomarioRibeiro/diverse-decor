import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteCadastroComponent } from './recursos/clientes/cliente-cadastro/cliente-cadastro.component';
import {ProdutosListaComponent } from './recursos/produtos/produtos-lista/produtos-lista.component';



const routes: Routes = [
  {
    path: 'clientes', loadChildren: () =>
    import ('./recursos/clientes/clientes.module').then(m => m.ClienteModule)
  },
  {
    path: 'cliente-cadastro',
    component: ClienteCadastroComponent
  },
  {
    path: 'produtos',
    component: ProdutosListaComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],

  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
