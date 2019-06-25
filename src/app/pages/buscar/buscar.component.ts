import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {

  pelicula:string = ''

  constructor(private _ps:PeliculasService, private ar:ActivatedRoute) { }

  ngOnInit() {
    // if(this.ar.snapshot.params['pelicula']){
    //   this.parametro = this.ar.snapshot.params['pelicula']
    //   this.pelicula = this.parametro
    // }

    this.ar.params.subscribe(data=>{
      if(data['pelicula']){
        this.pelicula = data['pelicula']
        this._ps.buscarPelicula(this.pelicula).subscribe()
      }
    })
    
  }

  onSubmit(form:NgForm){
    if((form['pelicula']).length<2){
      return false
    }
    // console.log(form);
    this._ps.buscarPelicula(this.pelicula).subscribe()
  }

}
