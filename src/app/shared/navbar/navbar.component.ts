import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  peli:string = ''

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onSubmit(forma:NgForm){
    if(forma['peli'].length < 2){
      return false;
    }
    this.router.navigate(['/buscar', forma['peli']])
  }

}
