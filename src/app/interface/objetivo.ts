
export interface Objetivo {
    idObjetivo: number;                // Obligatorio
    userId: number;                    // Obligatorio
    nombre: string | null;             // Puede ser nulo
    montoObjetivo: number | null;      // Puede ser nulo
    fechaLimite: string | null;        // Puede ser nulo (ISO date)
    estado: 'pendiente' | 'completado' | 'cancelado' | null; // Enum + null
}
