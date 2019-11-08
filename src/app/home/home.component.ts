import { Component, OnInit } from '@angular/core';
import { snapLineChartData } from './home';
import { HomeService } from './home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {

  constructor(private HomeService: HomeService) {
    this.putLineData();
   }
  sliderName: any;
  sliderContent: any;
  array: any;
  xdata: any;
  ydata: any;
  graph = {
    data:[],
    layout: {}
  };
  performancelineData: any[];
  lineChartValue: snapLineChartData[];
  putLineData() {
    this.HomeService.getLineData().subscribe(data => {
      this.getgraph(data);
      // this.lineChartValue = data['performancelineData'];
      // console.log(data);
      // let xax = [];
      // let yax = [];
      // data.forEach(element => {
      //   console.log(element.x);
      //   console.log(element.y);
      //   xax.push(element.x);
      //   yax.push(element.y);
      //   this.xdata = xax;
      //   this.ydata = yax;             
      // });
      // // this.getgraph();
      // console.log(this.xdata);
      // console.log(this.ydata);
    });    
  }
  getgraph(data){
    this.graph = {
      data: [
          // { x: [12, 26, 39], y: [2, 6, 3], mode: 'lines+markers', marker: {color: 'red'} },
          { x: data.map(d => d.x ), y: data.map(d => d.y ), type: 'bar', hoverinfo : 'skip'},
      ],
      layout: {width: 700, height: 400, title: 'A Fancy Plot'}
  };
  console.log(this.graph);
  }
  
public graph2 = {
  data: [
      { x: [20, 14, 23], y: ['giraffes', 'orangutans', 'monkeys'], name: 'SF Zoo',
      orientation: 'h',
      marker: {
        color: 'rgba(55,128,191,0.6)',
      },
      type: 'bar' },
      { x: [12, 7, 23], y: ['giraffes', 'orangutans', 'monkeys'], name: 'AF Zoo',
      orientation: 'h',
      marker: {
        color: 'rgba(89,128,191,0.6)',
      },
      type: 'bar' },
      { x: [12, 18, 29],
        y: ['giraffes', 'orangutans', 'monkeys'],
        name: 'LA Zoo',
        orientation: 'h',
        type: 'bar',
        marker: {
          color: 'rgba(255,153,51,0.6)',
        }},
  ],
  layout: {title: 'Colored Bar Chart',
  barmode: 'stack', width:700, height: 400}
};

public graph3 = {
  data: [
      { x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], 
      y: [20, 14, 25, 16, 18, 22, 19, 15, 12, 16, 14, 17],
      type: 'bar',
      name: 'Primary Product',
      marker: {
        color: 'rgb(49,130,189)',
        opacity: 0.7
      },
    },
      { x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      y: [19, 14, 22, 14, 16, 19, 15, 14, 10, 12, 12, 16],
      type: 'bar',
      name: 'Secondary Product',
      marker: {
        color: 'rgb(204,204,204)',
        opacity: 0.5
      } },
  ],
  layout: {title: '2013 Sales Report',xaxis: { tickangle: -45 },barmode: 'group'}
};
public graph4 = {
  data: [{
  values: [16, 15, 12, 6, 5, 4, 42],
  labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World' ],
  domain: {column: 0},
  name: 'GHG Emissions',
  hoverinfo: 'label+percent+name',
  hole: .4,
  type: 'pie'
}],
layout: {
  title: 'Global Emissions 1990-2011',
  annotations: [
    {
      font: {
        size: 20
      },
      showarrow: false,
      text: 'GHG',
      x: 0.17,
      y: 0.5
    }
  ],
  height: 400,
  width: 600,
  showlegend: false,
  grid: {rows: 1, columns: 2}
}
};
public graph1 = {
  data: [{
  values: [150, 100, 200],
  labels: ['Residential', 'Non-Residential', 'Utility'],
  marker: {colors: ['rgb(196, 146, 238)','rgb(136, 175, 255)','rgb(117, 214, 231)']},
  type: 'pie'
}],
layout: {
  height: 400,
  width: 500
}
}
  ngOnInit() {
    // const TESTER = document.getElementById('tester');

// Plotly.plot( TESTER, [{
//     x: [1, 5, 10, 24, 35],
//     y: [1, 2, 4, 8, 16] }], { 
//     margin: { t: 0 } }, {showSendToCloud:true} );

// /* Current Plotly.js version */
// console.log( Plotly.BUILD );
    
    this.array = [
      {
        sliderName: 'Accounts Insights',
        sliderContent: 'It is a long established fact that a reader will be distracted.',
        btnName: 'Learn More',
      },
      {
        sliderName: 'Customer Insights',
        sliderContent: 'It is a long established fact that a reader will be distracted.',
        btnName: 'Learn More',
      },
    ];
  }
}
