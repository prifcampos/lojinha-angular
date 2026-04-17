import { Component } from '@angular/core';
import { CardProduto } from '../card-produto/card-produto';

@Component({
  selector: 'app-lista-produtos',
  imports: [CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {}
