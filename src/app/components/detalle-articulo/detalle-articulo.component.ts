/*import { Component } from '@angular/core';
import {Articulo} from "../../models/Articulo";
import {ActivatedRoute} from "@angular/router";
import { ArticuloService } from '../../services/articulo.service';
import {CarritoService} from "../../services/carrito.service";

@Component({
  selector: 'app-detalle-articulo',
  templateUrl: './detalle-articulo.component.html',
  styleUrls: ['./detalle-articulo.component.css']
})
export class DetalleArticuloComponent {

  articuloId: number | null = 0;
  articulo: Articulo = new Articulo();
  cantidad: number = 1;

  constructor(
    private route: ActivatedRoute,
    private articuloService: ArticuloService,
    private carritoService: CarritoService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('articulo');
    this.articuloId = idParam ? parseInt(idParam, 10) : null;

    if (this.articuloId !== null) {
      this.articuloService.MostrarArticuloPorId().subscribe(datos => {
        const articuloEncontrado = datos.find(articulo  => articulo.iD_Articulo === this.articuloId);

        if (articuloEncontrado) {
          this.articulo = articuloEncontrado;
        } else {
          console.error('Artículo no encontrado');
        }
      });
    } else {
      console.error('ID de artículo inválido');
    }

    /!*this.articuloService.MostrarArticuloPorId().subscribe(datos => {
      for (var a of datos) {
        if (a['iD_Articulo'] == this.articuloId) {
          this.articulo = a;
        }
      }
    });*!/
  }

  alCarrito(articulo: Articulo): void {
    articulo.cantidad = this.cantidad;
    this.carritoService.agregarAlCarrito(articulo);
    alert('Agregado al carrito!');
  }

}*/
