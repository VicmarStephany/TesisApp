export interface BasicI {
    id: string,
    name: string
}

export interface BasicII {
    id: number,
    name: string
}

export const PayMethod: BasicI[] = [
    {id: '1', name: 'Pago móvil'},
    {id: '2', name: 'Transferencia bancaria'},
    {id: '3', name: 'PayPal'},
    {id: '4', name: 'Zelle'}
]

export const BankList: BasicI[] = [
    { id: '1', name: "Banesco, C.A."},
    { id: '2', name: "Banco de Venezuela"},
    { id: '3', name: "Banco Bicentenario"},
    { id: '4', name: "Banco Provincial"}
]

