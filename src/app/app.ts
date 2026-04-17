import { Component, signal } from '@angular/core';
import { Cabecalho } from './components/cabecalho/cabecalho';
import { ListaProdutos } from './components/lista-produtos/lista-produtos';
import { Rodape } from './components/rodape/rodape';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Cabecalho, ListaProdutos, Rodape, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lojinha');
}
