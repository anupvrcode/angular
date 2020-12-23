import { Component, OnInit } from '@angular/core';
import { ProductModel} from './product.model';
import { ProductsService } from './product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {



products : ProductModel[] = [];
service:ProductsService;
//constructor() { }


constructor(service:ProductsService)
{
this.service = service;

 // initProducts();
}
//initProducts()
//{
//  this.products = this.service.getAllProducts();
//}

//product: ProductModel = new ProductModel();

onAddProduct(product: ProductModel)
{
  this.products.unshift(product);
}

onDeleteProduct(productId:number)
{
 const index = this.products.findIndex(p=>p.id==productId)
 if(index>=0)
 {
 this.products.splice(index,1)
 }
}
  //component lifecycle event
  ngOnInit(): void {
  this.products = this.service.getAllProducts();
  }
  }

  
 

