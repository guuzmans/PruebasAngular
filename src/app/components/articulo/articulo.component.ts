import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Articulo} from "../../models/Articulo";
import {CarritoService} from "../../services/carrito.service";


@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent {

  cantidad: number = 1;
  @Input() articulo: Articulo;
  @Output() agregar = new EventEmitter;

  constructor(private carritoService: CarritoService) {
    this.articulo = {
      iD_Articulo: 0,
      iD_Categoria: 0,
      iD_Color: 0,
      iD_Talla: 0,
      iD_Modelo: 0,
      precio: 0.0,
      stock: 0,
      cantidad: 0
    }
  }

  Agregar(articulo: Articulo): void {
    articulo.cantidad = this.cantidad;
    this.carritoService.agregarAlCarrito(articulo);
  }

}
