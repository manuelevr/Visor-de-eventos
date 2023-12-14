// const rows = [
//     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
//   ];
const rows = [
    { id: 6, Fecha: '2023-09-25', Fuente: 'Servicio', Tipo: 'Precio', Nivel: 'INFO' },
    { id: 7, Fecha: '2023-09-26', Fuente: 'Aplicación', Tipo: 'Infraestructura', Nivel: 'WARN' },
    { id: 8, Fecha: '2023-09-27', Fuente: 'Orden', Tipo: 'Conectividad', Nivel: 'ERR' },
    { id: 9, Fecha: '2023-09-28', Fuente: 'Tienda', Tipo: 'Orden', Nivel: 'INFO' },
    { id: 10, Fecha: '2023-09-29', Fuente: 'Servicio', Tipo: 'Precio', Nivel: 'WARN' },
    { id: 11, Fecha: '2023-09-30', Fuente: 'Aplicación', Tipo: 'Infraestructura', Nivel: 'ERR' },
    { id: 12, Fecha: '2023-10-01', Fuente: 'Orden', Tipo: 'Conectividad', Nivel: 'INFO' },
    { id: 13, Fecha: '2023-10-02', Fuente: 'Tienda', Tipo: 'Orden', Nivel: 'WARN' },
    { id: 14, Fecha: '2023-10-03', Fuente: 'Servicio', Tipo: 'Precio', Nivel: 'ERR' },
    { id: 15, Fecha: '2023-10-04', Fuente: 'Aplicación', Tipo: 'Infraestructura', Nivel: 'INFO' },
    { id: 16, Fecha: '2023-10-05', Fuente: 'Orden', Tipo: 'Conectividad', Nivel: 'INFO' },
    { id: 17, Fecha: '2023-10-06', Fuente: 'Tienda', Tipo: 'Orden', Nivel: 'WARN' },
    { id: 18, Fecha: '2023-10-07', Fuente: 'Servicio', Tipo: 'Precio', Nivel: 'ERR' },
    { id: 19, Fecha: '2023-10-08', Fuente: 'Aplicación', Tipo: 'Infraestructura', Nivel: 'INFO' },
    { id: 20, Fecha: '2023-10-09', Fuente: 'Orden', Tipo: 'Conectividad', Nivel: 'WARN' },
    // Puedes agregar más filas si es necesario
];

// const rows = data.map((fila)=>{
//   if (fila.Nivel ==='INFO') {
    
//     return { ...fila, Tipo: '❕ INFO' };}  
//   if (fila.Nivel ==='WARN') {
    
//     return { ...fila, Tipo: '⚠ WARN' };}  
//   if (fila.Nivel ==='ERR') {
    
//     return { ...fila, Tipo: '⛔ ERR' };}  
//     else
//     return fila;
//   }
// )
 //  console.log("🚀 ~ file: Rows.ts:43 ~ rows ~ rows:", rows)
  export default rows