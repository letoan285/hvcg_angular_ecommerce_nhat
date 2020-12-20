import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  btnText = {addToCart: 'Add To Cart', viewMore: 'View More'};
  
  products = [
    {id: 1, stock: 0, name: 'iphone 6', price: 1000, src: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP705/SP705-iphone_6-mul.png', description: 'This is best selling of apple products'},
    {id: 2, stock: 10, name: 'iphone 7', price: 1300, src: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP705/SP705-iphone_6-mul.png', description: 'This is Good of apple products'},
    {id: 3, stock: 5, name:  'iphone 9', price: 1300, src: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP705/SP705-iphone_6-mul.png', description: 'This is so so of apple products'},
  ];

  @Input() myClass: any;

  public myName = 'Child List !!!';

  public product = {
    name: 'defaul name'
  }

  @Output() callParentFunc = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  renderStock(stock: number): string | number {
    if(stock > 0){
      return stock;
    }
    return 'Out Of Stock';
  }

  
  handleAddToCart(productId: number){
    alert(productId)
  }

  passToParent(productName: string){
    this.callParentFunc.emit(productName);
  }

  showDetail(product: any){
    this.product = product;
  }


}
