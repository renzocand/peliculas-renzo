import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  cargando = true;

  cartelera:any[]=[]
  taquilleras:any[]= []

  constructor(private _ps:PeliculasService) { }

  ngOnInit() {
    this._ps.getCartelera().subscribe(data=>{
      // console.log(data);
      this.cartelera = data
    })
    this._ps.getTaquilleras().subscribe(data=>{
      this.cargando = false;
      this.taquilleras = data
    })
  }

}
