import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
productName: string = 'iPhone 12';
productPrice: number = 100000;
  constructor() { }

  ngOnInit(): void {
  }

  onSave(){
    console.log('Product Saved');
  }

  onSearch(event){
    console.log('Keydown event handled');
    console.log(event.target.value);
  }
}
