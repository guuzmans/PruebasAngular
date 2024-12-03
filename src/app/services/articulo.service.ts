import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  private baseUrl = environment.apiURL;
  constructor(private http: HttpClient) { }

  MostrarArticuloPorId(): Observable<any> {
    return this.http.get(`${this.baseUrl}Api/Articulos/MostrarArticulosPorID`);
  }
}
