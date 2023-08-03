import { Injectable } from '@angular/core';
import { Product, Producto } from '../Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor() { }

  //private selectedProduct!: Product;
  private selectedProduct!: Producto;
  setSelectedProduct(product: Producto) {
    this.selectedProduct = product;
  }

  getSelectedProduct(): Producto {
    return this.selectedProduct;
  }
}
