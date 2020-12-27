import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {


  products = [
    {id: 1, stock: 0, name: 'iphone 6', price: 1000, src: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP705/SP705-iphone_6-mul.png', description: 'This is best selling of apple products'},
    {id: 2, stock: 10, name: 'iphone 7', price: 1300, src: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP705/SP705-iphone_6-mul.png', description: 'This is Good of apple products'},
    {id: 3, stock: 5, name:  'iphone 9', price: 1300, src: 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP705/SP705-iphone_6-mul.png', description: 'This is so so of apple products'},
  ];
  product = {
    name: '',
    src: '',
    description: '',
    price: 0
  };
  productId: any;
  constructor(public route: ActivatedRoute, public router: Router) {  }

  ngOnInit(): void {
    let id: any = this.route.snapshot.paramMap.get('id');
    // this.productId = this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe((params: any) => {
      let id = parseInt(params.get('id'));
      this.productId = id;
      this.product = this.products.filter((item) => item.id == id)[0];
    });
    
  }

  addToCart(product: any){

    // this.router.navigate(['/carts/cart-detail', product.id])
    this.router.navigateByUrl(`/carts/cart-detail/${product.id}`);
    console.log(product);
    
  }
  goPrevious(){
 
    const prevId = parseInt(this.productId)-1;
    this.router.navigate(['/products', prevId]);
   
  }
  
  goNext(){

    const nextId = parseInt(this.productId)+1;
    this.router.navigate(['products', 3]);
  }

}
