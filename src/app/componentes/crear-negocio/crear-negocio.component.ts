import { Component } from '@angular/core';
import { CrearNegocioDTO } from '../../dto/crear-negocio-dto';
import { NegociosService } from '../../servicios/negocios.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Horario } from '../../models/horario';
import { SidebarComponent } from '../sidebar/sidebar.component';


@Component({
  selector: 'app-crear-negocio',
  standalone: true,
  imports: [FormsModule, CommonModule, SidebarComponent],
  templateUrl: './crear-negocio.component.html',
  styleUrl: './crear-negocio.component.css'
})
export class CrearNegocioComponent {
  crearNegocioDTO: CrearNegocioDTO;
  horarios: Horario[];
  telefonos: string[];
  archivos!: FileList;
  tiposNegocio: string[];


  constructor(private negocioService: NegociosService) {
    this.crearNegocioDTO = new CrearNegocioDTO();
    this.horarios = [new Horario()];
    this.telefonos = [""];
    this.tiposNegocio = [];
    this.cargarTiposNegocio();
  }

  public crearNegocio() {
    this.crearNegocioDTO.horarios = this.horarios;
    this.negocioService.crear(this.crearNegocioDTO);
    console.log(this.crearNegocioDTO);
  }

  public agregarHorario() {
    this.horarios.push(new Horario());
    console.log(this.horarios.length);
  }

  public agregarTelefono() {
    this.telefonos.push("");
    console.log("llega")
  }

  public onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.archivos = event.target.files;
      this.crearNegocioDTO.imagenes.push(this.archivos[0].name);
    }
  }

  private cargarTiposNegocio() {
    this.tiposNegocio = ["PANADERIA", "RESTAURANTE", "LIBRERIA", "GIMNASIO", "CAFETERIA", "BAR", "DISCOTECA", "PELUQUERIA", "SUPERMERCADO", "TIENDA", "OTRO"];
  }
}
