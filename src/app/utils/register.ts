import { BasicII } from "./payment"

export const Sexo = [
    { id: "F", name:"Femenino" },
    { id: "M", name:"Masculino" },
    { id: 'O', name:"Otro"}
];

export const GradoAcademico = [
    {name: "Licenciatura"},
    {name: "Ingeniero"},
    {name: "Magister"},
    {name: "Doctorado"}
]

export interface OfertaCursada {
    idOferta: number,
    idEstudiante: number,
    cedulaEstudiante: number,
    nombreEstudiante: string,
    apellidosEstudiante: string,
}

export interface City {
    ciudad: string,
    ciudadId: number,
    estado: string,
    estadoId: number,
    pais: string,
    paisId: number
}

export const Estados: BasicII[] = [
    { id: 1, name: "Amazonas"},
    { id: 6, name: "Anzoátegui"},
    { id: 11, name: "Apure"},
    { id: 3, name: "Aragua"},
    { id: 10, name: "Barinas"},
    { id: 7, name: "Bolívar"},
    { id: 9, name: "Carabobo"},
    { id: 5, name: "Cojedes"},
    { id: 4, name: "Delta Amacuro"},
    { id: 24, name: "Distrito Capital"},
    { id: 8, name: "Falcón"},
    { id: 2, name: "Guárico"},
    { id: 12, name: "Lara"},
    { id: 13, name: "Mérida"},
    { id: 14, name: "Miranda"},
    { id: 16, name: "Monagas"},
    { id: 15, name: "Nueva Esparta"},
    { id: 17, name: "Portuguesa"},
    { id: 18, name: "Sucre"},
    { id: 19, name: "Táchira"},
    { id: 20, name: "Trujillo"},
    { id: 21, name: "Vargas"},
    { id: 22, name: "Yaracuy"},
    { id: 23, name: "Zulia"},
]
