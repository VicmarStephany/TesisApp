import { BasicI } from "./payment"

export const Courses: BasicI[] = [
    { id: 'especializacion', name: 'Especialidades'},
    { id: 'maestria', name: 'Maestrías'},
    { id: 'doctorado', name: 'Doctorados'},
    { id: 'diplomado', name: 'Diplomados'},
    { id: 'curso', name: 'Cursos'}
]

export const Campus = [
    { id: '3', name: 'Vice-Rectorado Barquisimeto' },
    { id: '2', name: 'Vice-Rectorado "Luis Caballero Mejías" - Caracas' },
    { id: '1', name: 'Vice-Rectorado Puerto Ordaz' }
]

export const Modes = [
    {id: 'presencial', name: 'Presencial'},
    {id: 'online', name: 'Remoto' },
    {id: 'semipresencial', name: 'Semipresencial'}
]

export const StatusPay = [
    {id: '1', name: 'Aprobado'},
    {id: '2', name: 'En Proceso'},
    {id: '3', name: 'Rechazado'}
]