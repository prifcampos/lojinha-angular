import { Component, inject } from '@angular/core';
import { CardProduto } from '../card-produto/card-produto';
import { Product } from '../../services/product';
import { Cart } from '../../services/cart';

@Component({
  selector: 'app-lista-produtos',
  imports: [CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  // Injeção de dependência moderna
  product = inject(Product);
  cartService = inject(Cart);
  produtos = this.product.getProducts();

  receberProduto(produto: any) {
    console.log("Produto adicionado: ", produto.title);
    this.cartService.adicionar(produto);
  }
}
