import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { Data } from './Data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'charts';
  url = 'http://localhost:3001/api/products';
  codigoIdentificadorUnico = [];
  valorLancamentoRemessa = [];
  chart = [];
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get(this.url).subscribe((res: Data[]) => {
      res.forEach(y => {
        this.codigoIdentificadorUnico.push(y.codigoIdentificadorUnico);
        this.valorLancamentoRemessa.push(y.valorLancamentoRemessa);
});
this.chart = new Chart('canvas', {
  type: 'bar',
  data: {
    labels: this.codigoIdentificadorUnico,
    datasets: [
      {
        data: this.valorLancamentoRemessa,
        borderColor: '#3cba9f',
              fill: false
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });
    });
  }
}

