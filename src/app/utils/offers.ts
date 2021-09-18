export interface OfferDetails {
    programaId: number,
    campusId: number,
    nombre: string,
    modalidad: string,
    descripcion: string,
    codigo: string,
    cantidadSemestres: number,
    duracion: string,
    pensum: string,
    costo: number,
}

export interface Offer {
    carrera: string,
    carreraId: number,
    codigo: string,
    programa: string
}