import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Cart {

  itens: any[] = [];

  adicionar(produto: any){
    this.itens.push(produto);
  }

  obterQuantidade(): number {
    return this.itens.length;
  }

  constructor() { }
}
