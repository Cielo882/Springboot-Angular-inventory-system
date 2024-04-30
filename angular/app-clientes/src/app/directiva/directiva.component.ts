import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { ClienteService } from '../clientes/cliente.service';
import { Proveedor } from '../clientes/region';


@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent implements OnInit {

  habilitar: boolean = true;
  // Inyectar el servicio ClienteService
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    // Obtener la cantidad de clientes por región desde el servicio
    this.clienteService.getCantidadClientesPorRegion().subscribe(data => {
      const labels = Object.keys(data); // Obtener nombres de regiones
      const dataValues = Object.values(data); // Obtener cantidad de clientes por región

      // Configurar los datos para el gráfico
      const chartData = {
        labels: labels,
        datasets: [{
          label: 'Productos por proveedor',
          data: dataValues,
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      };

      // Configurar las opciones del gráfico
      const options = {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      };

      // Crear el gráfico utilizando Chart.js
      const ctx = document.getElementById('myChart') as HTMLCanvasElement;
      const myChart = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: options
      });
    });
  }

  

  setHabilitar(): void {
    this.habilitar = (this.habilitar == true) ? false : true;
  }

}