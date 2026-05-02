import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-produto',
  imports: [],
  templateUrl: './card-produto.html',
  styleUrl: './card-produto.css',
})
export class CardProduto {
  // Recebe o dado lá de fora, a ! significa "confia que vai chegar"
  @Input() produtoRecebido!: any; 
  @Output() adicionar = new EventEmitter<any>();

  clicouComprar() {
    this.adicionar.emit(this.produtoRecebido);
  }
}
