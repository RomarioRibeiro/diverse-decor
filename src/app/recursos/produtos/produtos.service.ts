import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/core/model/diverse.modul';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  status: string[] = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];

  productNames: string[] = [
    'Bamboo Watch',
    'Black Watch',
    'Blue Band',
    'Blue T-Shirt',
    'Bracelet',
    'Brown Purse',
    'Chakra Bracelet',
    'Galaxy Earrings',
    'Game Controller',
    'Gaming Set',
    'Gold Phone Case',
    'Green Earbuds',
    'Green T-Shirt',
    'Grey T-Shirt',
    'Headphones',
    'Light Green T-Shirt',
    'Lime Band',
    'Mini Speakers',
    'Painted Phone Case',
    'Pink Band',
    'Pink Purse',
    'Purple Band',
    'Purple Gemstone Necklace',
    'Purple T-Shirt',
    'Shoes',
    'Sneakers',
    'Teal T-Shirt',
    'Yellow Earbuds',
    'Yoga Mat',
    'Yoga Set',
];

constructor(private http: HttpClient) { }
  // tslint:disable-next-line: typedef
  getProductsSmall() {
    return this.http.get<any>('assets/products-small.json')
    .toPromise()
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    .then(res => <Product[]> res.data)
    // tslint:disable-next-line: arrow-return-shorthand
    .then(data => { return data; });
}

// tslint:disable-next-line: typedef
getProducts() {
    return this.http.get<any>('assets/products.json')
    .toPromise()
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    .then(res => <Product[]> res.data)
    // tslint:disable-next-line: arrow-return-shorthand
    .then(data => { return data; });
}

// tslint:disable-next-line: typedef
getProductsWithOrdersSmall() {
    return this.http.get<any>('assets/products-orders-small.json')
    .toPromise()
    // tslint:disable-next-line: no-angle-bracket-type-assertion
    .then(res => <Product[]> res.data)
    // tslint:disable-next-line: arrow-return-shorthand
    .then(data => { return data; });
}

generatePrduct(): Product {
    const product: Product =  {
        id: this.generateId(),
        name: this.generateName(),
        description: 'Product Description',
        price: this.generatePrice(),
        quantity: this.generateQuantity(),
        category: 'Product Category',
        inventoryStatus: this.generateStatus(),
        rating: this.generateRating()
    };

    product.image = product.name.toLocaleLowerCase().split(/[ ,]+/).join('-') + '.jpg';
    return product;
}

generateId() {
    let text = '';
    // tslint:disable-next-line: prefer-const
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    // tslint:disable-next-line: no-var-keyword
    for (var i = 0; i < 5; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}

// tslint:disable-next-line: typedef
generateName() {
    return this.productNames[Math.floor(Math.random() * Math.floor(30))];
}

// tslint:disable-next-line: typedef
generatePrice() {
    return Math.floor(Math.random() * Math.floor(299)+1);
}

// tslint:disable-next-line: typedef
generateQuantity() {
    return Math.floor(Math.random() * Math.floor(75)+1);
}

// tslint:disable-next-line: typedef
generateStatus() {
    return this.status[Math.floor(Math.random() * Math.floor(3))];
}

// tslint:disable-next-line: typedef
generateRating() {
    return Math.floor(Math.random() * Math.floor(5)+1);
}
}

