import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  private historial: string[] = JSON.parse(localStorage.getItem('historial')) || [];
  private mensajesSubject = new Subject<string[]>();
  mensajes$ = this.mensajesSubject.asObservable();

  enviarMensaje(mensaje: string) {
    this.mensajesSubject.next([mensaje]);
    this.historial.push(mensaje);
    localStorage.setItem('historial', JSON.stringify(this.historial));
  }

  obtenerHistorial(): string[] {
    return this.historial;
  }  
  
  limpiarHistorial() {
    this.historial = [];
    localStorage.setItem('historial', JSON.stringify(this.historial));
  }
}
