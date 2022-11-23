import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, GifsSearchResponse } from '../interfaces/searchResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor( private http: HttpClient) { 
    this._history = JSON.parse(localStorage.getItem('history')!)|| [];
  }

  private _history:string []= [
    
  ]
  private api_key: string ='uRFwIxNEZZu1eLNmm8WY44yj8M3nOQth';
  private url: string='https://api.giphy.com/v1/gifs/search';
  results: Gif[]=[]
  get history():string[]{
    return [...this._history]
  }

  buscarGifs(query:string){
    let clean = query.trim().toLocaleLowerCase();
    if(clean!=='' && !this._history.includes(clean)){
      this._history.unshift(query)
      this._history=this._history.splice(0,10)//solo acepta 10 valores
      
      localStorage.setItem('history', JSON.stringify(this._history))
    }

    // if(this._history.indexOf(query)==-1){
    //   if(this._history.length<10){
    //     this._history.unshift(query)
    //   }else{
    //     this._history.pop();
    //     this._history.unshift(query)
    //   }
    // }
    
    const params = new HttpParams()
    .set('api_key',this.api_key)
    .set('q',query)
    .set('limit',10)//solo saca 10 gifs

    //Ojo devuelve un nuevo objeto, no establece un parametro nuevo
    //params.set('atributo3', 3)
    this.http.get<GifsSearchResponse>(this.url, {params})
    .subscribe((resp)=>this.results= resp.data
    )
  }

  
}
