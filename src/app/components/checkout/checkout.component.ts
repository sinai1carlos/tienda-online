import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/Product';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  mostrarCarta=true;
  cartItems: CartItem[] = [];
  orderPlaced = false;

  // Aquí deberías implementar un servicio para obtener los productos del carrito y el total de la compra.
  constructor(private cart:ShoppingCartService,private router:Router){
    this.cartItems = this.cart.getCartItems();
  }
  getTotalPrice(): number {
    // Retorna el precio total de todos los productos en el carrito.
    return this.cartItems.reduce((total, item) => total + item.product.precio * item.quantity, 0);
  }

  placeOrder() {
    // Aquí puedes implementar la lógica para realizar el pedido.
    // Puedes usar un servicio para enviar la información del pedido a la base de datos o a la pasarela de pago.
    // Por ejemplo, podrías enviar los detalles del pedido a un servidor backend para procesarlo.

    // Una vez que el pedido ha sido procesado, puedes mostrar un mensaje de confirmación al usuario.
    this.mostrarCarta=false;
    this.orderPlaced = true;
  }
  redirect(){
    this.router.navigate(['/']);
  }
}
