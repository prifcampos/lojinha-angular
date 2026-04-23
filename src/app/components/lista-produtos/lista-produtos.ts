import { Component, inject } from '@angular/core';
import { CardProduto } from '../card-produto/card-produto';
import { Product } from '../../services/product';

@Component({
  selector: 'app-lista-produtos',
  imports: [CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  // Injeção de dependência moderna
  product = inject(Product);
  produtos = this.product.getProducts();
}
