import { Component, OnInit } from '@angular/core';
import { ProductModel} from './product.model'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

product:ProductModel = {
id: 1,
name:  'Samsung Galaxy 10',
price:  100000,
description:  "A smart phone from Samsung",
isAvailable:  false,
}
  constructor() { }

  ngOnInit(): void {
  }

  showAvailability()
  {
    return this.product.isAvailable?'Yes':'No';
  }
 
}
