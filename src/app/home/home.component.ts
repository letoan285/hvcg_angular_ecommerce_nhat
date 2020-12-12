import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public title = 'Product List';
  public myname: string = '';
  isDisabled = false;

  public myClass = 'product-item card red';

  products = [
    {id: 1, stock: 0, name: 'iphone 6', price: 1000, src: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP705/SP705-iphone_6-mul.png'},
    {id: 2, stock: 10, name: 'iphone 7', price: 1300, src: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP705/SP705-iphone_6-mul.png'},
    {id: 3, stock: 5, name:  'iphone 9', price: 1300, src: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP705/SP705-iphone_6-mul.png'},
  ];

  public product = {
    id: 1, name: 'Samsung', price: 3000, src: 'https://images-na.ssl-images-amazon.com/images/I/81%2Bh9mpyQmL._AC_SL1500_.jpg'
  }

  getName(){
    return 'Le Van Toan';
  }

  renderStock(stock: number): string | number {
    if(stock > 0){
      return stock;
    }
    return 'Out Of Stock';
  }


  constructor() { 
    this.myname = 'Nhat Nguyen';
  }

  ngOnInit(): void {
  }

  handleAddToCart(productId: number){
    alert(productId)
  }
  callParent(event: string){
 
   
    this.title = event;
  }

}
