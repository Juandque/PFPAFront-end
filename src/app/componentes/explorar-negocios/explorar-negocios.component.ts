import { Component } from '@angular/core';
import { ItemListarNegociosDTO } from '../../dto/item-listar-negocios-dto';
import { NegociosService } from '../../servicios/negocios.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ObtenerDistanciaDTO } from '../../dto/obtener-distancia-dto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-explorar-negocios',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarComponent, FormsModule],
  templateUrl: './explorar-negocios.component.html',
  styleUrl: './explorar-negocios.component.css'
})
export class ExplorarNegociosComponent {
  negocios: ItemListarNegociosDTO[];
  obtenerDistanciaDTO: ObtenerDistanciaDTO;
  constructor(private negocioService: NegociosService){
    this.obtenerDistanciaDTO= new ObtenerDistanciaDTO();
    this.negocios=[];
    this.listarNegocios();
  }

  public listarNegocios(){
    this.negocios=this.negocioService.listar();
  }

  public obtenerDistancia(){
    this.obtenerDistanciaDTO.latitud=213212;
    this.obtenerDistanciaDTO.longitud=321223;
    console.log(this.obtenerDistanciaDTO);
  }
}
