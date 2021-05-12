import { CarouselModule } from 'primeng/carousel';
import { ProdutosListaComponent } from './produtos-lista/produtos-lista.component';
import { NgModule } from '@angular/core';
import { ProdutoCadastroComponent } from './produto-cadastro/produto-cadastro.component';
import { PrimengModule } from 'src/app/primeng.module';


@NgModule({
  declarations: [
    ProdutoCadastroComponent,
    ProdutosListaComponent
  ],
  imports: [
      PrimengModule,
      CarouselModule

  ]
})
export class ProdutosModule {}
