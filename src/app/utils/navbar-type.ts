export const HomeNav = [
    {name: 'Inicio', path: '/home', childs: false},
    {name: 'Institución', path: '/institution', childs: false},
    {name: 'Oferta académica', path: '/courses/all', childs: true},
    {name: 'Cartelera informativa', path: '/info-board', childs: false},
    {name: 'Contáctanos', path: '/contact', childs: false},
    {name: 'Aulas', path: '', childs: false}
]

export const HomeNavChilds = [
    {id: 'especializacion', name: 'Especialidades', path: '/courses/'},
    {id: 'maestria', name: 'Maestrías', path: '/courses/'},
    {id: 'doctorado', name: 'Doctorados', path: '/courses/'},
    {id: 'diplomado', name: 'Diplomados', path: '/courses/'},
    {id: 'curso', name: 'Cursos', path: '/courses/'}
]

