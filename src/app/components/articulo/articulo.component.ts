import {Component, OnInit} from '@angular/core';
import {ArticuloService} from '../../services/articulo.service';
import {Articulo} from "../../models/Articulo";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  articulos: Articulo[] = [];
  articulo: Articulo = new Articulo();
  constructor(private articuloService: ArticuloService) { }


  ngOnInit(): void {
    this.MostrarPeliculasId()
    console.log(this.articulos)
    }

    MostrarPeliculasId(){
    this.articuloService.MostrarArticuloPorId().subscribe((datos:any) =>{this.articulos = datos});
    }


}
