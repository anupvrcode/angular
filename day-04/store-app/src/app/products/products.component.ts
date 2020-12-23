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

onSubmit()
{
  this.product.id = Date.now();
  this.products.unshift(this.product);
  this.product= new ProductModel();
  this.showMessage = true;

  //var obj=this
  //setTimeout(function(){ obj.showMessage = false; }, 1000 );

  setTimeout(()=>{this.showMessage = false;},1000);
}

onDelete(id)
{
if(confirm('Are your sure....'))
{
  const index = this.products.findIndex((p)=> p.id==id);
  if( index>=0 )
  {
    this.products.splice(index, 1)
  }
 }
}

  constructor() { }

  ngOnInit(): void {
  }
  }

  
 

