import { Menu } from "./sidebar.model";

export const StudentMenu: Menu[] = [
  { path: '/dashboard', title: 'Principal', icon: 'ni-tv-2 text-primary', class: '' },
  { path: '/academic', title: 'Datos Académicos', icon: 'ni-hat-3 text-blue', class: '' },
  { path: '/payment', title: 'Registro de Pago', icon: 'ni-credit-card text-orange', class: '' },
];
//hacer este de abajo bien 
export const AdminMenu: Menu[] = [
  { path: '/a-users', title: 'Consultar usuarios', icon: 'ni-single-02', class: ''},
  { path: '/a-v-classroom', title: 'Aulas virtuales', icon: 'ni-laptop', class: ''}, 
  { path: '/a-user-role', title: 'Roles de usuario', icon: 'ni-key-25', class: ''},
  { path: '/a-payments', title: 'Pagos', icon: 'ni-credit-card text-orange', class: ''}
]

export const ProfeMenu: Menu[] = [
  //{ path: '/notes', title: 'Actas', icon: 'ni-paper-diploma', class: ''},  
  { path: '/notes', title: 'Actas', icon: 'ni-chart-bar-32', class: ''},
  { path: '/students', title: 'Estudiantes', icon: 'ni-badge', class: ''}, 
  { path: '/virtual-classroom', title: 'Aulas virtuales', icon: 'ni-laptop', class: ''},
]

export const CoordMenu: Menu[] = [
  { path: '/offers', title: 'Oferta académica', icon: 'ni-paper-diploma', class: ''},
  { path: '/c-students', title: 'Estudiantes', icon: 'ni-badge', class: ''}, 
  { path: '/c-notes', title: 'Reporte de notas', icon: 'ni-chart-bar-32', class: ''},
  
  
]