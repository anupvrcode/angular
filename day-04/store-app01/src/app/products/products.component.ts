import { Component, OnInit } from '@angular/core';
import { ProductModel} from './product.model'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {



products : ProductModel[] =
[{
id: 1,
name:  'Samsung Galaxy 10',
price:  100000,
description:  "A smart phone from Samsung",
isAvailable:  false
},
{
id: 2,
name:  'Iphone 12',
price:  100000,
description:  "A smart phone from Apple",
isAvailable:  true
},
{
id: 3,
name:  'Google Pixel 4',
price:  100000,
description:  "A smart phone from Google",
isAvailable:  true
}
]

showMessage: boolean = false;
product: ProductModel = new ProductModel();

onAddProduct(product: ProductModel)
{
  this.products.unshift(product);
}

  constructor() { }

  ngOnInit(): void {
  }
  }

  
 

