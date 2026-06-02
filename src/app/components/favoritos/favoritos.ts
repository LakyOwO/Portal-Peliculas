import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favoritos',
  imports: [CommonModule],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css'
})
export class Favoritos implements OnInit {

  favoritos: any[] = [];

  ngOnInit(): void {

    this.favoritos = JSON.parse(
      localStorage.getItem('favoritos') || '[]'
    );

    console.log(this.favoritos);

  }

  getPoster(path: string | null): string {

    if (!path) {
      return 'https://via.placeholder.com/500x750?text=No+Image';
    }

    return `https://image.tmdb.org/t/p/w500${path}`;
  }

}