import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  Highcharts = Highcharts
  chartOptions ={}

  constructor(){
    this.chartOptions=
    {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'Average Student Admission 2022',
          align: 'left'
      },
      credits:{
      enabled:false
     },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %'
              }
          }
      },
      series: [{
          name: 'Courses',
          colorByPoint: true,
          data: [{
              name: 'MEARN',
              y: 70.67,
              sliced: true,
              selected: true
          }, {
              name: 'PYTHON',
              y: 14.77
          },  {
              name: '.NET',
              y: 4.86
          }, {
              name: 'TESTING',
              y: 2.63
          }, {
              name: 'FLUTTER ',
              y: 1.53
          },  {
              name: 'BIG DATA',
              y: 1.40
          }, {
              name: 'PHP ',
              y: 0.84
          }, {
              name: 'JAVASCRIPT',
              y: 0.51
          }, {
              name: 'SECURTY',
              y: 2.6
          }]
      }]
  }
  }
}
