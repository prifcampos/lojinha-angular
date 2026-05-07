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
// variáveis
  produtos: any[] = [];
  carregando: boolean = true;

  ngOnInit(): void {
    console.log('Pedindo produtos pra API...');

    // Precisamos nos INSCREVER no Observable para que a requisição aconteça
    this.productService.getProducts().subscribe({
      next: (dadosDaApi: any[]) =>{
        console.log('Os dados chegaram!', dadosDaApi);
        this.produtos = dadosDaApi;
        this.carregando = false; // desliga o carregando quando chegam os dados
        this.cdr.detectChanges();
      },
      error: (erro: any) => {
        console.error("Opa, deu ruim!", erro);
        this.carregando = false; // desliga o carregando mesmo se der erro pra não travar a tela
        alert("Erro ao buscar produtos");
      },
    });
  }

  receberProduto(produto: any) {
    console.log("Produto adicionado: ", produto.title);
    this.cartService.adicionar(produto);
  }
}