import { DiverseService } from './../../service/diverse.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/module/diverse.modul';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[];
  responsiveOptions;
  constructor(private diverseService: DiverseService) {
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
    this.diverseService.getProductsSmall().then(products => {
		this.products = products;
		});
  }

}