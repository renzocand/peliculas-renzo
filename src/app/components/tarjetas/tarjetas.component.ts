import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: []
})
export class TarjetasComponent implements OnInit {

  @Input('peliculas') peliculas:any[]
  @Input('pagina') pagina:string

  constructor() { }

  ngOnInit() {
  }

}
