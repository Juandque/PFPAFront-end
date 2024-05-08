import { publicDecrypt } from "crypto";
import { TipoNegocio } from "../models/tipo-negocio";
import { Ubicacion } from "../models/ubicacion";
import { Horario } from "../models/horario";

export class CrearNegocioDTO {
    constructor(
        public nombre: string='',
        public descripcion: string='',
        public codigoUsuario: string='',
        public direccion: string='',
        public tipoNegocio: TipoNegocio,
        public ubicacion: Ubicacion= new Ubicacion(),
        public telefonos: Set<number>= new Set<number>(),
        public horarios: Horario[]=[],
        public imagenes: string[]=[]
    ){}
}
