import { Injectable } from '@angular/core';
import { CartItem, Producto } from '../Product';



@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private selectedProduct: Producto | null = null;
  private cartItems: CartItem[] = [];
  
  constructor() { }

  addToCart(product: Producto) {
    const existingItem = this.cartItems.find(item => item.product.nombre === product.nombre);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({ product, quantity: 1 });
    }
  }
  removeFromCart(item: CartItem) {
    this.cartItems = this.cartItems.filter(cartItem => cartItem !== item);
  }

  getCartItems(): CartItem[] {
    return this.cartItems;
  }
  
  setSelectedProduct(product: Producto) {
    this.selectedProduct = product;
  }

  getSelectedProduct(): Producto | null {
    return this.selectedProduct;
  }

}
