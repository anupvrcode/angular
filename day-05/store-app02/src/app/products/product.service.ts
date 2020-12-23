import { Injectable } from '@angular/core';
import { ProductModel} from './product.model';
@Injectable()
export class ProductsService{


private products : ProductModel[] =
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

    getAllProducts():ProductModel[]
    { return this.products;}
}
