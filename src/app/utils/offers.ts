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
    id: number,
    cantidadSecciones: number,
}

export interface Offer {
    carrera: string,
    carreraId: number,
    codigo: string,
    programa: string
}

export interface Subject {
    asignaturaId: number,
    carrera: string,
    carreraId: number,
    codigo: string,
    nombre: string
}