import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-killua',
  templateUrl: './killua.component.html',
  styleUrls: ['./killua.component.css']
})
export class KilluaComponent {
@Input() fotos: string[] = []
  title = "Killua"

 fotoAtual = 0;

   primeiraFoto(): void {
    this.fotoAtual = 0;
  }

   proximaFoto(): void {
    if(this.fotos.length > this.fotoAtual - 1){

      this.fotoAtual++;
    }
  }

   fotoAnterior(): void {
    if (this.fotoAtual > 0) {
      this.fotoAtual--;
    }
  }

   ultimaFoto(totalFotos: number): void {
    this.fotoAtual = totalFotos - 1;
  }

}

