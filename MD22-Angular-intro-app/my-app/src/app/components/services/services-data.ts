export type Service = {
    id: number,
    name: string,
    price: number,
}


export const SERVICES: Service[] = [
  { id: 1, name: 'Web Development', price: 300.00},
  { id: 2, name: 'Design', price: 400.00},
  { id: 3, name: 'Integration', price: 250.00},
  { id: 4, name: 'Training', price: 220.00},
];