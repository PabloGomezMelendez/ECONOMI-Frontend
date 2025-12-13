export interface Simulacion {
    idSimulacion: number;
    userId: number;
    tipo: 'ahorro' | 'inversion' | null;
    parametros: ParametrosSimulacion | null;
    resultado: number | null;
    fecha: string | null;
}
export interface ParametrosSimulacion {
    monto_mensual: number;
    meses: number;
}