import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  pelicula:object = {}
  videosES:any[] = []
  videosEN:any[] = []

  id:number
  pagina:string
  constructor(private _ps:PeliculasService, private ar:ActivatedRoute) { 
    this.id = this.ar.snapshot.params.id;
    this.pagina = '/'+this.ar.snapshot.params.pag;
  }

  ngOnInit() {
    this._ps.getPelicula(this.id).subscribe(data=>{
      this.pelicula = data;
      console.log(this.pelicula);
    })

    this._ps.getVideos(this.id, 'es').subscribe(data=>{
      this.videosES = data
    })
    this._ps.getVideos(this.id, 'en').subscribe(data=> this.videosEN = data)
  }
  

}
