import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private url: string = 'https://node-mongo-kissmark.herokuapp.com/api/products'
  constructor(private http:HttpClient) { }

  getAllProduct(){
    return this.http.get(`${this.url}`)
      .pipe(
        map(resp => resp)
      )
  }


}
