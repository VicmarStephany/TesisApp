export interface User {
    apellidoMaterno: string,
    apellidoPaterno: string,
    id: number,
    nombres: string,
    rol: string,
    rolId: number,
    token: string,
    documento: number
}

export interface userInfo {
    apellidoMaterno: string,
    apellidoPaterno: string,
    celular1: string,
    celular2: string,
    ciudadNacimientoId: number,
    correo1: string,
    correo2: string,
    direccion1: string,
    direccion2: string,
    fechaIngreso: string,
    fechaNacimiento: string,
    lapsoIngreso: string,
    nombres: string,
    pass: string,
    rolId: number,
    sexo: string,
    telefono1: string,
    user: string,
    //usuarioClave: string,
    usuarioId: number,
}

export interface academicInfo {
    gradoEstudios: string,
    titulo: string,
    anoPromocion: number,
    institucion: string,
    pais: string,
    
}