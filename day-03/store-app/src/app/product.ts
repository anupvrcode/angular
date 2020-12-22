export class Product
{
constructor()
{
  this.id=10;
  this.name = 'iphoneX';
}
  id:number;
  name:string;
  isAvailable:boolean;

  showDetails(){
    console.log('product details')
    this.getDetails();
  }

  getDetails():string{return ''};
}
