import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product, Producto } from 'src/app/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  constructor(private productService: ProductService, private router: Router){}

  product:Product[]=[
    {
      "categoria": "Camisetas",
      "productos": [
        {
          "id": 1,
          "nombre": "Camiseta de algodón con estampado floral",
          "precio": 25.99,
          "descripcion": "Camiseta de manga corta con estampado floral, fabricada en algodón suave y cómodo.",
          "imagen": "https://th.bing.com/th/id/R.0a78f01d7a91a0bfa3448f1dff4fc229?rik=UlX7AdWq0wgcOQ&pid=ImgRaw&r=0"
        },
        {
          "id": 2,
          "nombre": "Camiseta básica de cuello redondo",
          "precio": 15.99,
          "descripcion": "Camiseta básica de manga corta y cuello redondo, ideal para el uso diario.",
          "imagen": "https://th.bing.com/th/id/OIP.QH2o-GQNDsNLR8_ymuC_IAHaHa?pid=ImgDet&rs=1"
        },
        {
          "id": 3,
          "nombre": "Camiseta con logo estampado",
          "precio": 19.99,
          "descripcion": "Camiseta de manga corta con el logo de la marca estampado en el frente.",
          "imagen": "https://i.pinimg.com/originals/71/99/02/7199021da1b8e20e66aee82441dcf1d8.png"
        },
        {
          "id": 4,
          "nombre": "Camiseta deportiva de secado rápido",
          "precio": 29.99,
          "descripcion": "Camiseta de manga corta diseñada para actividades deportivas, fabricada con material de secado rápido.",
          "imagen": "https://th.bing.com/th/id/OIP.j-HUmzSgzvLIw5G3uycp9AHaHa?pid=ImgDet&rs=1"
        },
        {
          "id": 5,
          "nombre": "Camiseta de tirantes con encaje",
          "precio": 22.99,
          "descripcion": "Camiseta sin mangas con detalles de encaje en la parte superior.",
          "imagen": "https://th.bing.com/th/id/OIP.Lktp84kFXFa1xTF8VVUOMQAAAA?pid=ImgDet&rs=1"
        }
      ]
    }
    ,
  ]
  onSelectProduct(product: Producto) {
    this.productService.setSelectedProduct(product);
  
    this.router.navigate(['/product', product.id]);
  }
  
}
