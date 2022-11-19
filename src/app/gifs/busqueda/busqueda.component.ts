import { Component, Input, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  constructor( private bsService:GifsService) { }

  //@Input() new:string="historial por defecto"

  ngOnInit(): void {
  }

  query: string = "";

  buscarGifs(){
    console.log(this.query);
    this.bsService.buscarGifs(this.query);
    this.query="";
  }
}
