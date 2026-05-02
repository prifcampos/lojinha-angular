import { Component, inject, OnInit } from '@angular/core';
import { CardProduto } from '../card-produto/card-produto';
import { Product } from '../../services/product';
import { Cart } from '../../services/cart';

@Component({
  selector: 'app-lista-produtos',
  imports: [CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos implements OnInit {
  // Injeção de dependência moderna
  product = inject(Product);
  cartService = inject(Cart);
  produtos: any[] = [];

  ngOnInit(): void {
    console.log('funcionou')
    this.produtos = this.product.getProducts();
  }

  receberProduto(produto: any) {
    console.log("Produto adicionado: ", produto.title);
    // Simula a chama de API
    this.cartService.adicionar(produto);
  }
}
