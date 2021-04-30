import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';
import { MovieComponent } from '../movie/movie.component';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  BASE_URL = 'https://tr360-frontend-exam-april.azurewebsites.net/czetoj/movies';

  constructor(private http: HttpClient) { }

  getMovieList(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.BASE_URL}`);;
  }

  deleteMovie(id: number): Observable<Movie> {
    return this.http.delete<Movie>(`${this.BASE_URL}/${id}`);
  }
}
