import { Product } from './../shared/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  product: Product[] = [
    {
      id: '0',
      name: 'shirt',
      image: '/assets/images/products/callout-01.jpg',
      category: 'mains',
      featured: true,
      label: 'mens',
      price: 'Rs. 600',
      description: 'Branded Shirt'
    },
    {
      id: '1',
      name: 'shirt',
      image: '/assets/images/products/callout-02.jpg',
      category: 'mains',
      featured: true,
      label: 'mens',
      price: 'Rs. 600',
      description: 'Branded Shirt'
    },
    {
      id: '2',
      name: 'shirt',
      image: '/assets/images/products/callout-03.jpg',
      category: 'mains',
      featured: true,
      label: 'mens',
      price: 'Rs. 600',
      description: 'Branded Shirt'
    },
    {
      id: '3',
      name: 'shirt',
      image: '/assets/images/products/callout-04.jpg',
      category: 'mains',
      featured: true,
      label: 'mens',
      price: 'Rs. 600',
      description: 'Branded Shirt'
    }
  ]
  constructor() { }

  ngOnInit() {

  }

}
