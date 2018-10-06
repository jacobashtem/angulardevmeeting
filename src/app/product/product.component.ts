import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Array<Product> = [
    {
      name: 'Laptop HP', price: 1920, category: 'Laptopy'
    },
    {
      name: 'Nokia', price: 500, category: 'Telefony'
    },
    {
      name: 'Czekolada', price: 2.5, category: 'Słodycze'
    },
    {
      name: 'Lenovo', price: 500, category: 'Telefony'
    },
    {
      name: 'Laptop Samsung', price: 5000, category: 'Laptopoy'
    },
    {
      name: 'Wafel', price: 1.5, category: 'Słodycze'
    },
    {
      name: 'Mac', price: 50000, category: 'Laptopy'
    },
    {
      name: 'Iphone', price: 99000, category: '1400'
    },
    {
      name: 'Croisant', price: 12, category: 'Słodycze'
    }

  ]
  constructor() {

  }

  ngOnInit() {
  }

}
