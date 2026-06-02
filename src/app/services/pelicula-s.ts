import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url =
    'https://api.themoviedb.org/3/discover/movie?language=es-ES&page=1';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<any> {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTFjMzE3MGZlYWRkNjA4NGY2ODY3OTFkMjFiNTIzYyIsIm5iZiI6MTc4MDI2MTg1Mi42MjQsInN1YiI6IjZhMWNhM2RjNTUyYjY4NWQzOTg4MDAyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uTvulP4QcglIeHwfvETfXjLp5KLLnA15KIz36Ypdo84',
      'accept': 'application/json'
    });

    return this.http.get<any>(this.url, { headers });
  }


  addFavorite(movieId: number) {

    const url =
      'https://api.themoviedb.org/3/account/23227793/favorite';

    const body = {
      media_type: 'movie',
      media_id: movieId,
      favorite: true
    };

    const headers = new HttpHeaders({
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTFjMzE3MGZlYWRkNjA4NGY2ODY3OTFkMjFiNTIzYyIsIm5iZiI6MTc4MDI2MTg1Mi42MjQsInN1YiI6IjZhMWNhM2RjNTUyYjY4NWQzOTg4MDAyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uTvulP4QcglIeHwfvETfXjLp5KLLnA15KIz36Ypdo84'
    });

    return this.http.post(url, body, { headers });
  }


  getFavorites() {

    const url =
      'https://api.themoviedb.org/3/account/23227793/favorite/movies?language=es-ES&page=1';

    const headers = new HttpHeaders({
      accept: 'application/json',
      Authorization: 'Bearer TU_TOKEN'
    });

    return this.http.get<any>(url, { headers });
  }
}

