export interface Product{
    categoria:String;
    productos: Producto[];
}

export interface Producto {
    id: number;
    nombre: string;
    precio: number;
    descripcion: string;
    imagen: string;
}
export interface CartItem {
    product: Producto;
    quantity: number;
  }