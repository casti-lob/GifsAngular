import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor() { 

  }

  private _history:string []= [
    
  ]
  get history():string[]{
    return [...this._history]
  }

  buscarGifs(query:string){
    if(this._history.indexOf(query)==-1){
      if(this._history.length<10){
        this._history.unshift(query)
      }else{
        this._history.pop();
        this._history.unshift(query)
      }
    }
   
  }
}
