import { NgModule } from '@angular/core';
import { PrimengModule } from 'src/app/primeng.module';
import { ClienteCadastroComponent } from './cliente-cadastro/cliente-cadastro.component';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
import { ClienteRountingModule } from './clientes.routing';


@NgModule({
    declarations: [
        ClienteCadastroComponent,
        ClientesListaComponent
    ],
    imports: [
        PrimengModule,
        ClienteRountingModule
    ]
})
export class ClienteModule {}
