import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }

  getMovies(): void {
    this.httpService.getMovieList().subscribe((data) => {
      this.movies = data;
    })
  }

  deleteMovie(id: number): any {
    return this.httpService.deleteMovie(id).subscribe(
      () => {
        this.httpService.getMovieList();
      }
    )
  };

}
