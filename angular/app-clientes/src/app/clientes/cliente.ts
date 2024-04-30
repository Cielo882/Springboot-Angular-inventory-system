import { Proveedor } from './region';

export class Cliente {
  id: number;
  nombre: string;
  marca: string;
  createAt: string;
  cantidad: string;
  foto: string;
  proveedor: Proveedor;
}
