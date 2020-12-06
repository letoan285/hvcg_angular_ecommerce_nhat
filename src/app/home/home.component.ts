import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public title = 'Home Page';
  public myname: string = '';



  public product = {
    id: 1, name: 'Samsung', price: 3000, src: 'https://images-na.ssl-images-amazon.com/images/I/81%2Bh9mpyQmL._AC_SL1500_.jpg'
  }

  getName(){
    return 'Le Van Toan';
  }


  constructor() { 
    this.myname = 'Nhat Nguyen';
  }

  ngOnInit(): void {
  }

}
