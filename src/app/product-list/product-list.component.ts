import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  
  @Input () products: any;
  @Input() myClass: any;

  public myName = 'Child List !!!';

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


}
