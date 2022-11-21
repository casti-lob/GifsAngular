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
    let clean = query.trim().toLocaleLowerCase();
    if(clean!=='' && !this._history.includes(clean)){
      this._history.unshift(query)
      this._history=this._history.splice(0,10)//solo acepta 10 valores
    }

    // if(this._history.indexOf(query)==-1){
    //   if(this._history.length<10){
    //     this._history.unshift(query)
    //   }else{
    //     this._history.pop();
    //     this._history.unshift(query)
    //   }
    // }
   
  }
}
