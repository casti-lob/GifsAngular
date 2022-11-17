import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor() { 

  }

  private _history:string []= [
    "uno"
  ]
  get history():string[]{
    return [...this._history]
  }

  buscarGifs(query:string){
    this._history.unshift(query)
  }
}
