
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent } from './produtos/home/home.component';
import { TesteComponent} from './produtos/teste/teste.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'teste',  component: TesteComponent
  },
  {
    path: 'clientes', loadChildren: () =>
    import ('./recursos/clientes/clientes.module').then(m => m.ClienteModule)
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
