import { Injectable } from '@angular/core';
import { ItemListarNegociosDTO } from '../dto/item-listar-negocios-dto';
import { CrearNegocioDTO } from '../dto/crear-negocio-dto';
import { Ubicacion } from '../models/ubicacion';
import { TipoNegocio } from '../models/tipo-negocio';

@Injectable({
  providedIn: 'root'
})
export class NegociosService {
  negocios: ItemListarNegociosDTO[];
  constructor() {
    this.negocios = [];
    this.negocios.push( new ItemListarNegociosDTO('1', 'Bar Armenia', 4, 30,
    TipoNegocio.BAR, '10:00', 'Cerrado', 'Calle N#20', ['https://picsum.photos/100', 'https://picsum.photos/101', 'https://picsum.photos/102', 'https://picsum.photos/103'] ) );

    this.negocios.push( new ItemListarNegociosDTO('2', 'Restaurante Italiano', 4, 30,
    TipoNegocio.RESTAURANTE, '10:00', 'Cerrado', 'Calle N#20', ['https://picsum.photos/100', 'https://picsum.photos/101', 'https://picsum.photos/102', 'https://picsum.photos/103'] ) );

    this.negocios.push( new ItemListarNegociosDTO('3', 'Peluqueria Peluche', 4, 30,
    TipoNegocio.PELUQUERIA, '10:00', 'Cerrado', 'Calle N#20', ['https://picsum.photos/100', 'https://picsum.photos/101', 'https://picsum.photos/102', 'https://picsum.photos/103'] ) );

    this.negocios.push( new ItemListarNegociosDTO('4', 'Hotel Peligroso', 4, 30,
    TipoNegocio.OTRO, '10:00', 'Cerrado', 'Calle N#20', ['https://picsum.photos/100', 'https://picsum.photos/101', 'https://picsum.photos/102', 'https://picsum.photos/103'] ) );
   }

  public listar(): ItemListarNegociosDTO[] {
    return this.negocios;
  }

  public obtener(codigo: string): ItemListarNegociosDTO | undefined {
    return this.negocios.find(negocios => negocios.codigo == codigo);
  }

  public crear(negocioNuevo: CrearNegocioDTO) {
    const codigo = (this.negocios.length + 1).toString();
    this.negocios.push( new ItemListarNegociosDTO(codigo, negocioNuevo.nombre, 0, 0, negocioNuevo.tipoNegocio, '10:00', 'Abierto', negocioNuevo.direccion, negocioNuevo.imagenes) );
  }

  public eliminar(codigo: string){
    this.negocios = this.negocios.filter(n => n.codigo !== codigo);
  }
}
