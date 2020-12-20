import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product: any;
  @Input() btnText : any;
  constructor() { }

  ngOnInit(): void {
  }

  @Output() showDetail = new EventEmitter();

  renderStock(stock: number): string | number {
    if(stock > 0){
      return stock;
    }
    return 'Out Of Stock';
  }

  viewDetail(product: any){
    this.showDetail.emit(product);
    // alert(product.name)
  }

}
