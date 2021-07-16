import { Menu } from "./sidebar.model";

export const StudentMenu: Menu[] = [
  { path: '/dashboard', title: 'Principal', icon: 'ni-tv-2 text-primary', class: '' },
  { path: '/academic', title: 'Datos Académicos', icon: 'ni-hat-3 text-blue', class: '' },
  { path: '/payment', title: 'Registro de Pago', icon: 'ni-credit-card text-orange', class: '' },
];

//{ path: '/', title: '',  icon:'ni-single-02 text-yellow', class: '' },
//{ path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
//{ path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
//{ path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' }

export const CoordMenu: Menu[] = [
  { path: '/offers', title: 'Oferta académica', icon: 'ni-paper-diploma', class: ''},
  { path: '/students', title: 'Estudiantes', icon: 'ni-badge', class: ''}, 
  { path: '/notes', title: 'Reporte de notas', icon: 'ni-chart-bar-32', class: ''},
  { path: '/payments', title: 'Pagos', icon: 'ni-credit-card text-orange', class: ''}
  
]

//{ path: '/', title: 'Aranceles', icon: '', class: ''},
//{ path: '/', title: 'Ofertas', icon: '', class: ''}