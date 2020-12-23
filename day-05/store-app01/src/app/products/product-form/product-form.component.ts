import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ProductModel} from '../product.model'
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
@Output()addProduct = new EventEmitter<ProductModel>();

showMessage: boolean = false;
product: ProductModel = new ProductModel();

onSubmit()
{
  this.product.id = Date.now();
  this.addProduct.emit(this.product);
  this.product= new ProductModel();
  this.showMessage = true;

  //var obj=this
  //setTimeout(function(){ obj.showMessage = false; }, 1000 );

  setTimeout(()=>{this.showMessage = false;},1000);
}
  constructor() { }

  ngOnInit(): void {
  }

}
