import { ProdutosService } from './../produtos.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/model/diverse.modul';

@Component({
  selector: 'app-produtos-lista',
  templateUrl: './produtos-lista.component.html',
  styleUrls: ['./produtos-lista.component.css']
})
export class ProdutosListaComponent implements OnInit {
  products: Product[];

  responsiveOptions;
  constructor(private produtosService: ProdutosService) {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

  ngOnInit(): void {
    this.produtosService.getProductsSmall().then(products => {
      this.products = products;
    });
  }


}
