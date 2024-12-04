import {Component} from '@angular/core';
import {Articulo} from "../../models/Articulo";
import {ActivatedRoute} from "@angular/router";
import {ArticuloService} from '../../services/articulo.service';
import {CarritoService} from "../../services/carrito.service";

@Component({
  selector: 'app-detalle-articulo',
  templateUrl: './detalle-articulo.component.html',
  styleUrls: ['./detalle-articulo.component.css']
})
export class DetalleArticuloComponent {

  articuloCategoria: string | null = "";
  articulo: Articulo = new Articulo();
  cantidad: number = 1;

  constructor(
    private route: ActivatedRoute,
    private articuloService: ArticuloService,
    private carritoService: CarritoService
  ) {
  }

  ngOnInit(): void {
    this.articuloCategoria = this.route.snapshot.paramMap.get('articulo');

    this.articuloService.MostrarArticuloPorId().subscribe(datos => {
      for (var a of datos) {
        if (a['categoria'] == this.articuloCategoria) {
          this.articulo = a;
        }
      }
    });
  }

  alCarrito(articulo: Articulo): void {
    articulo.cantidad = this.cantidad;
    this.carritoService.agregarAlCarrito(articulo);
    alert('Agregado al carrito!');
  }

}
