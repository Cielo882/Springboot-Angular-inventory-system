import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClienteService } from './cliente.service';
import { MensajeService } from './cliente.service';
import { AuthService } from '../usuarios/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})

export class HistorialComponent implements OnInit {
  mensajes: string[] = [];

  constructor(private historialService: MensajeService,
    public authService: AuthService,
    public activatedRoute: ActivatedRoute) {} // Usa historialService en lugar de clienteService

  ngOnInit() {
    this.mensajes = this.historialService.obtenerHistorial();
  }

  limpiarHistorial() {
    this.historialService.limpiarHistorial();
    this.mensajes = []; // Limpia los mensajes mostrados en la vista
  }
}