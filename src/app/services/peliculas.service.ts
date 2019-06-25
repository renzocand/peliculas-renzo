import { Injectable, Query } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private url = "https://api.themoviedb.org/3";
  private query = "?api_key=c1e3e6727855bef3f3575b5d11e9b1b7&language=es&callback=JSONP_CALLBACK"
  
  peliculas:any[]

  constructor(private http:HttpClient) { }

  Query(params:string){
    return this.http.jsonp(`${this.url}${params}/${this.query}`, 'JSONP_CALLBACK').pipe(
      map(data=>{
      return data['results'].slice(0,20);
    }))
  }


  getTaquilleras(){
    return this.Query("/movie/top_rated")
  }

  getCartelera(){
    return this.Query("/movie/upcoming")
  }

  getPelicula(id:number){
    return this.http.jsonp(`${this.url}/movie/${id}${this.query}`, 'JSONP_CALLBACK')
  }

  buscarPelicula(pelicula:string){
    return this.http.jsonp(`${this.url}/search/movie${this.query}&query=${pelicula}`, 'JSONP_CALLBACK').pipe(
      map(data=>{
        this.peliculas = data['results']
        // console.log(this.peliculas);
        return this.peliculas
      })
    )
  }
  getVideos(id:number, idioma:string){
    return this.http.jsonp(`${this.url}/movie/${id}/videos?api_key=c1e3e6727855bef3f3575b5d11e9b1b7&language=${idioma}&callback=JSONP_CALLBACK`, 'JSONP_CALLBACK').pipe(
      map(data=>data['results'])
    )
  }


}
