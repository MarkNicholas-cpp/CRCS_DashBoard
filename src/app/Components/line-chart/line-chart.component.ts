import { Component,OnInit,OnDestroy } from '@angular/core';
import { Chart } from 'chart.js/auto';
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent implements OnInit , OnDestroy{
  ngOnInit(): void {
    this.CreateChart();
  }
  public chart:any;
  ngOnDestroy(): void {
    if (this.chart) {
      console.log('chart Distroyed')
      this.chart.destroy();
    }
  }

  CreateChart() {
    this.chart = new Chart('myChart', {
      type: 'line', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: [
          '2022-05-10',
          '2022-05-11',
          '2022-05-12',
          '2022-05-13',
          '2022-05-14',
          '2022-05-15',
          '2022-05-16',
          '2022-05-17',
        ],
        datasets: [
          {
            label: 'Sales',
            data: ['467', '576', '572', '79', '92', '574', '573', '576'],
            backgroundColor: 'tomato',
          },
          {
            label: 'Profit',
            data: ['542', '542', '536', '327', '17', '0.00', '538', '541'],
            backgroundColor: 'slateblue',
          },
        ],
      },
      options: {
        aspectRatio: 2.25,
      },
    });
  }
}
