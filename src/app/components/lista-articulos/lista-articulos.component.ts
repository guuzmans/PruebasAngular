import {Component} from '@angular/core';
import {Articulo} from "../../models/Articulo";
import {ArticuloService} from "../../services/articulo.service";

@Component({
  selector: 'app-lista-articulos',
  templateUrl: './lista-articulos.component.html',
  styleUrls: ['./lista-articulos.component.css']
})
export class ListaArticulosComponent {

  articulos: Articulo[] = [];
  articulo: Articulo = new Articulo();

  constructor(private articuloService: ArticuloService) {
  }


  ngOnInit(): void {
    this.MostrarPeliculasId();
  }

  MostrarPeliculasId() {
    this.articuloService.MostrarArticuloPorId().subscribe((datos: []) => {
      this.articulos = datos;
      console.log(this.articulos);
    });
  }

  Agregar(): void {
    alert('Agregado al carrito!');
  }
}
