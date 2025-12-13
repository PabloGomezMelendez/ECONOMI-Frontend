
export interface Transaccion {
    idTransaccion: number;                // Obligatorio
    idUsuario: number;                    // Obligatorio
    idCategoria: number | null;           // Puede ser nulo
    cantidad: number | null;              // Puede ser nulo
    fecha: string | null;                 // Fecha en formato ISO
    tipo: 'ingreso' | 'gasto' | null;     // Control de tipo + null
    descripcion: string | null;           // Puede ser nulo
}
