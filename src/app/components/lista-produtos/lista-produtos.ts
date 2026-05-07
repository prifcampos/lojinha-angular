import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
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
  productService = inject(Product);
  cdr = inject(ChangeDetectorRef);
  cartService = inject(Cart);
  produtos: any[] = [];

  ngOnInit(): void {
    console.log('Pedindo produtos pra API...');

    // Precisamos nos INSCREVER no Observable para que a requisição aconteça
    this.productService.getProducts().subscribe((dadosDaApi: any[]) => {
      console.log("Os dados chegaram!");

    // Pegamos a resposta da API e guardamos na nossa variável
      this.produtos = dadosDaApi;
      this.cdr.detectChanges();
    });
  }

  receberProduto(produto: any) {
    console.log("Produto adicionado: ", produto.title);
    this.cartService.adicionar(produto);
  }
}