import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Product {
// Dados falsos (mock)
private listaProdutos = [
  { id: 1, title: 'Mochila para Laptop com conector para powerbanck externo', price: 109.90, image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png' },
  { id: 2, title: 'Camiseta Casual', price: 49.90, image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png' },
  { id: 3, title: 'Jaqueta de Frio', price: 199.90, image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png' },
  { id: 4, title: 'Tenis Nike', price: 399.90, image: 'https://pngimg.com/uploads/running_shoes/running_shoes_PNG5816.png' }
];

getProducts() {
  return this.listaProdutos;
}
}