import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CartItem, Producto } from 'src/app/Product';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  totalPrice!: number;
  itemValid=true;
  product!: Producto;
  cartItems: CartItem[] = [];

  constructor(private cart:ShoppingCartService,private router:Router){
    this.cartItems = this.cart.getCartItems();
  }

  addToCart(product: Producto) {
    this.cart.addToCart(product);
  }

  removeFromCart(item: CartItem) {
    this.itemValid=false;
    this.cart.removeFromCart(item);
  }

  
  getTotalPrice(): number {
    this.totalPrice = this.cartItems.reduce((total, item) => total + item.product.precio * item.quantity, 0);
    // Devuelve el precio total almacenado en la variable
    return this.totalPrice;
  }

  checkout() {
    console.log('Proceso de pago iniciado. Productos:', this.cartItems);
    this.router.navigate(['/checkout']);
  }
  redirect(){
    this.router.navigate(['/']);
  }
}
