import { Injectable } from '@angular/core';
import {Articulo} from "../models/Articulo";

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  alCarrito: Articulo[] = [];

  constructor() { }

  VerCarrito() {
    return this.alCarrito;
  }

  agregarAlCarrito(articulo: Articulo): void {
    for (var a of this.alCarrito) {
      if (a.iD_Articulo == articulo.iD_Articulo) {
        a.cantidad += articulo.cantidad
        return
      }
    }
    this.alCarrito.push(articulo);
  }

}
