import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from '../../pipes/truncate-pipe';

@Component({
  selector: 'app-card-produto',
  imports: [ CommonModule, TruncatePipe ],
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
