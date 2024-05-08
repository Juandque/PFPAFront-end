export class Horario {
    constructor(
        public dia: string='',
        public horaInicio: Date= new Date(),
        public horaFin: Date= new Date()
    ){}
}
