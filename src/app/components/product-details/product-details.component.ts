import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, Producto } from 'src/app/Product';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  product!: Producto;

  constructor(private productService: ProductService, private router: Router,private cart:ShoppingCartService) {
    this.product = this.productService.getSelectedProduct();
  }

  addToCart() {
    // Aquí puedes implementar la lógica para agregar el producto al carrito de compras
    // Puedes usar un servicio para manejar el carrito y almacenar los productos agregados.
    console.log('Producto agregado al carrito:', this.product);
    this.cart.addToCart(this.product);
    this.cart.setSelectedProduct(this.product);
    this.router.navigate(['/shopping-cart']);
  }
}

