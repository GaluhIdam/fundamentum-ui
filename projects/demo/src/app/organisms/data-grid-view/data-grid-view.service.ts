import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsDTO, ResponseDTO } from './products.dto';

@Injectable({
  providedIn: 'root',
})
export class DataGridViewService {
  constructor(private readonly _httpClient: HttpClient) {}

  /** Getting data from rest api */
  getProducts(
    page: number,
    limit: number,
    search: string
  ): Observable<ResponseDTO<ProductsDTO[]>> {
    return this._httpClient.get<ResponseDTO<ProductsDTO[]>>(
      `https://dummyjson.com/products/search?q=${search}&limit=${limit}&skip=${page}`
    );
  }
}
