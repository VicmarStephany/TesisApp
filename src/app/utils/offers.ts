export interface OfferDetails {
    programaEstudioId: number,
    campusId: number,
    nombre: string,
    modalidad: string,
    descripcion: string,
    codigo: string,
    cantidadSemestres: number,
    cantidadCupos: number,
    duracion: string,
    pensum: string,
    costo: number,
    id: number
}

export interface Offer {
    carrera: string,
    carreraId: number,
    codigo: string,
    programa: string
}