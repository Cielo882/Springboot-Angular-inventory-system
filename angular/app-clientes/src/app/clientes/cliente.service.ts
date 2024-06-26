import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Proveedor } from './region';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable, Subject, throwError } from 'rxjs';

import { Router } from '@angular/router';
import { MensajeService } from './mensaje.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  enviarMensaje(mensaje: string) {
    this.mensajeService.enviarMensaje(mensaje);
  }

  
  public urlEndPoint: string = 'http://localhost:8080/api/clientes';

  constructor(public mensajeService: MensajeService,public http: HttpClient, public router: Router) { }

  
  
  getRegiones(): Observable<Proveedor[]> {

    return this.http.get<Proveedor[]>(this.urlEndPoint + '/regiones').pipe(
      map(response => {
        // La respuesta contiene las regiones en un objeto, extraemos las regiones del objeto
        return Object.values(response);
      }),
      catchError(this.handleError)
    );
  }

  getCantidadClientesPorRegion(): Observable<Proveedor[]> {
    return this.http.get<Proveedor[]>(this.urlEndPoint + '/cantidad-por-region');
  }



  private handleError(error: any) {
    // Handle the error here
    return throwError(error);
  }

  
  getClientes(page: number): Observable<any> {
    return this.http.get(this.urlEndPoint + '/page/' + page).pipe(
      tap((response: any) => {
        console.log('ClienteService: tap 1');
        (response.content as Cliente[]).forEach(cliente => console.log(cliente.nombre));
      }),
      map((response: any) => {
        (response.content as Cliente[]).map(cliente => {
          cliente.nombre = cliente.nombre.toUpperCase();
          return cliente;
        });
        return response;
      }),
      tap(response => {
        console.log('ClienteService: tap 2');
        (response.content as Cliente[]).forEach(cliente => console.log(cliente.nombre));
      }));
  }

  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post(this.urlEndPoint, cliente)
      .pipe(
        map((response: any) => response.cliente as Cliente),
        catchError(e => {
          if (e.status == 400) {
            return throwError(e);
          }
          if (e.error.mensaje) {
            console.error(e.error.mensaje);
          }
          return throwError(e);
        }));
  }

  getCliente(id): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {
        if (e.status != 401 && e.error.mensaje) {
          this.router.navigate(['/clientes']);
          console.error(e.error.mensaje);
        }

        return throwError(e);
      }));
  }

  update(cliente: Cliente): Observable<any> {
    return this.http.put<any>(`${this.urlEndPoint}/${cliente.id}`, cliente).pipe(
      catchError(e => {
        if (e.status == 400) {
          return throwError(e);
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      }));
  }

  delete(id: number): Observable<Cliente> {
    return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      }));
  }

  subirFoto(archivo: File, id): Observable<HttpEvent<{}>> {
    let formData = new FormData();
    formData.append("archivo", archivo);
    formData.append("id", id);

    const req = new HttpRequest('POST', `${this.urlEndPoint}/upload`, formData, {
      reportProgress: true
    });

    return this.http.request(req);
  }
}
export { MensajeService };

