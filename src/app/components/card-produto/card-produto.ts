import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-produto',
  imports: [],
  templateUrl: './card-produto.html',
  styleUrl: './card-produto.css',
})
export class CardProduto {
  // Recebe o dado lá de fora, a ! significa "confia que vai chegar"
  @Input() produtoRecebido!: any; 
}
