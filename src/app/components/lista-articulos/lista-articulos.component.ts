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
  articulosPaginados: Articulo[] = [];
  paginaActual: number = 1;
  tamanoPaginado: number = 8;
  articulo: Articulo = new Articulo();

  constructor(private articuloService: ArticuloService) {
  }


  ngOnInit(): void {
    this.MostrarArticulosId();
    this.CambiarPagina(1);
  }

  MostrarArticulosId() {
    this.articuloService.MostrarArticuloPorId().subscribe((datos: []) => {
      this.articulos = this.MezclarArticulos(datos);
      console.log(this.articulos);
    });
  }

  Agregar(): void {
    alert('Agregado al carrito!');
  }

  MezclarArticulos(lista: Articulo[]): Articulo[] {
    return lista.sort(() => Math.random() - 0.5);
  }

  CambiarPagina(numeroPagina: number): void {
    this.paginaActual = numeroPagina;
    const inicio = (numeroPagina - 1) * this.tamanoPaginado;
    const fin = inicio + this.tamanoPaginado;
    this.articulosPaginados = this.articulos.slice(inicio, fin);
  }

  ObtenerPaginas(): number[] {
    const totalPaginas = Math.ceil(this.articulos.length / this.tamanoPaginado);
    return Array.from({length: totalPaginas}, (_, i) => i + 1);
  }
}
