import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ItemListarNegociosDTO } from '../../dto/item-listar-negocios-dto';
import { NegociosService } from '../../servicios/negocios.service';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-gestion-negocios',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarComponent],
  templateUrl: './gestion-negocios.component.html',
  styleUrl: './gestion-negocios.component.css'
})
export class GestionNegociosComponent {
  negocios: ItemListarNegociosDTO[];

  constructor(private negocioService: NegociosService){
    this.negocios=[];
    this.listarNegocios();
  }

  public listarNegocios(){
    this.negocios=this.negocioService.listar();
  }

}
