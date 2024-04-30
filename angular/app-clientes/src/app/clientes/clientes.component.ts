import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { ModalService } from './detalle/modal.service';
import swal from 'sweetalert2';
import { tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../usuarios/auth.service';
import { MensajeService } from './mensaje.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  mensajes: string[];


  clientes: Cliente[];
  paginador: any;
  clienteSeleccionado: Cliente;

  constructor(public clienteService: ClienteService,
    public mensajeService: MensajeService,
    public modalService: ModalService,
    public authService: AuthService,
    public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    

    this.activatedRoute.paramMap.subscribe(params => {
      let page: number = +params.get('page');

      if (!page) {
        page = 0;
      }

      this.clienteService.getClientes(page)
        .pipe(
          tap(response => {
            console.log('ClientesComponent: tap 3');
            (response.content as Cliente[]).forEach(cliente => console.log(cliente.nombre));
          })
        ).subscribe(response => {
          this.clientes = response.content as Cliente[];
          this.paginador = response;
        });
    });

    this.modalService.notificarUpload.subscribe(cliente => {
      this.clientes = this.clientes.map(clienteOriginal => {
        if (cliente.id == clienteOriginal.id) {
          clienteOriginal.foto = cliente.foto;
        }
        return clienteOriginal;
      })
    })

    this.mensajeService.mensajes$.subscribe(mensajes => {
      this.mensajes = mensajes;

    });
  }

  
  delete(cliente: Cliente): void {
    swal.fire(
      'Está seguro?',
      `¿Seguro que desea eliminar este producto? ${cliente.nombre} ${cliente.marca}?`,
      'warning'
    ).then((result) => {
      if (result.value) {

        this.clienteService.delete(cliente.id).subscribe(
          () => {
            this.clientes = this.clientes.filter(cli => cli !== cliente)
            swal.fire(
              'Producto Eliminado!',
              `Producto ${cliente.nombre} eliminado con éxito.`,
              'success'
            )
          }
        )

      }
    });
  }

  abrirModal(cliente: Cliente) {
    this.clienteSeleccionado = cliente;
    this.modalService.abrirModal();
  }

  

  enviarMensaje(mensaje: string) {
    this.clienteService.enviarMensaje(mensaje);
  }


  

  incrementarCantidad(cliente: Cliente) {
    let cantidadNumerica = parseInt(cliente.cantidad);
    cantidadNumerica++;
    cliente.cantidad = cantidadNumerica.toString();
    this.clienteService.update(cliente).subscribe(
      clienteActualizado => {
        
        this.enviarMensaje(`1 ${cliente.nombre +" "+ cliente.marca} ingresó al almacén`);
        
        console.log('Cantidad actualizada correctamente:', clienteActualizado);
        
        
        // Puedes realizar otras acciones aquí si es necesario
      },
      error => {
        console.error('Error al actualizar la cantidad:', error);
      }
    );
  }
  
  decrementarCantidad(cliente: Cliente) {
    let cantidadNumerica = parseInt(cliente.cantidad);
    if (cantidadNumerica > 0) {
      cantidadNumerica--;
      cliente.cantidad = cantidadNumerica.toString();
      this.clienteService.update(cliente).subscribe(
        clienteActualizado => {
          this.enviarMensaje(`1 ${cliente.nombre +" "+ cliente.marca} salió del almacén`);

          console.log('Cantidad actualizada correctamente:', clienteActualizado);
          // Puedes realizar otras acciones aquí si es necesario
        },
        error => {
          console.error('Error al actualizar la cantidad:', error);
        }
      );
    }
  }

}

