import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../services/pelicula-s';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './peliculas.html',
  styleUrl: './peliculas.css'
})
export class Peliculas implements OnInit {

  peliculas: any[] = [];
  loading = true;

  constructor(private movieService: MovieService, private cdr: ChangeDetectorRef) {}



  ngOnInit(): void {
    this.obtenerPeliculas();
    
  }

  obtenerPeliculas() {
    this.movieService.getMovies().subscribe(
      (response) => {
        this.peliculas = response.results;
        this.loading = false;
        this.cdr.detectChanges();
      },
      (error) => {
        console.error(error);
        this.loading = false;
        this.cdr.detectChanges();
      }
    );
  }

  getPoster(path: string | null): string {

    if (!path) {
      return 'https://via.placeholder.com/500x750?text=No+Image';
    }

    return `https://image.tmdb.org/t/p/w500${path}`;
  }


 agregarFavorito(movie: any) {

  let favoritos = JSON.parse(
    localStorage.getItem('favoritos') || '[]'
  );

  const existe = favoritos.some(
    (fav: any) => fav.id === movie.id
  );

  if (!existe) {

    favoritos.push(movie);

    localStorage.setItem(
      'favoritos',
      JSON.stringify(favoritos)
    );

    console.log('Favorito agregado');
  } else {

    console.log('La película ya está en favoritos');

  }

}

}