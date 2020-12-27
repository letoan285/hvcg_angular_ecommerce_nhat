import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categories = [
    {id: 1, name: 'Mobile', slug: 'mobile'},
    {id: 2, name: 'Laptop', slug: 'laptop'},
    {id: 3, name: 'personal computer', slug: 'pc'}
  ];
  user = {
    id: 1, name: 'No Admin', isAdmin: false
  }
  isAdmin = false;

  date = 9;

  categoryTitle = 'product-title';

  myName ='LE VAN TOAN';
  constructor() { }

  ngOnInit(): void {
  }

}

/// Angular <==>
//1. Component directive
//2. structural directive , *ngFor, *ngIf, *ngSwitchCase
//3. attribute directive