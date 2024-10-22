import { makeAutoObservable } from "mobx";
import MyRecommend_1 from '../../../assets/img/MyRecommend-1.png'
import MyRecommend_2 from '../../../assets/img/MyRecommend-2.png'
import MyRecommend_3 from '../../../assets/img/MyRecommend-3.png'
//import dataJson from '../../../mocks/data-refection.json';


export class MyRecordViewmodel {
    constructor() {
      makeAutoObservable(this)
      this.search();
    }
    displayCount: number = 0;
    defaultLoad: number = 8;
    myDiaryShow: {date: string, time: string, title: string, desc: string}[] = [];
    currentTypeFilter: string = '';
    visibleBtnLoadMore = true;

    topData = [
      { label: 'BODY RECORD', title: '自分のカラダの記録', img:  MyRecommend_1},
      { label: 'MY EXERCISE', title: '自分の運動の記録', img:  MyRecommend_2},
      { label: 'MY DIARY', title: '自分の日記', img:  MyRecommend_3}
    ]

    myExercise = [
        {title: '家事全般（立位・軽い）',time: '10 min', unit: '26kcal'},
        {title: '家事全般（立位・軽い）',time: '10 min', unit: '26kcal'},
        {title: '家事全般（立位・軽い）',time: '10 min', unit: '26kcal'},
        {title: '家事全般（立位・軽い）',time: '10 min', unit: '26kcal'},
        {title: '家事全般（立位・軽い）',time: '10 min', unit: '26kcal'},
        {title: '家事全般（立位・軽い）',time: '10 min', unit: '26kcal'},
        {title: '家事全般（立位・軽い）',time: '10 min', unit: '26kcal'},
        {title: '家事全般（立位・軽い）',time: '10 min', unit: '26kcal'},
        {title: '家事全般（立位・軽い）',time: '10 min', unit: '26kcal'},
        {title: '家事全般（立位・軽い）',time: '10 min', unit: '26kcal'},
        {title: '家事全般（立位・軽い）',time: '10 min', unit: '26kcal'},
        {title: '家事全般（立位・軽い）',time: '10 min', unit: '26kcal'},
        {title: '家事全般（立位・軽い）',time: '10 min', unit: '26kcal'},
        {title: '家事全般（立位・軽い）',time: '10 min', unit: '26kcal'},
        {title: '家事全般（立位・軽い）',time: '10 min', unit: '26kcal'},
        {title: '家事全般（立位・軽い）',time: '10 min', unit: '26kcal'},
        {title: '家事全般（立位・軽い）',time: '10 min', unit: '26kcal'},
        {title: '家事全般（立位・軽い）',time: '10 min', unit: '26kcal'},
        {title: '家事全般（立位・軽い）',time: '10 min', unit: '26kcal'},
        {title: '家事全般（立位・軽い）',time: '10 min', unit: '26kcal'},
        {title: '家事全般（立位・軽い）',time: '10 min', unit: '26kcal'},
        {title: '家事全般（立位・軽い）',time: '10 min', unit: '26kcal'},
        {title: '家事全般（立位・軽い）',time: '10 min', unit: '26kcal'},
    ];
    myDiary = [
        {date: '2021.05.21', time: '23:25', title:'私の日記の記録が一部表示されます。', desc:'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'},
        {date: '2021.05.21', time: '23:25', title:'私の日記の記録が一部表示されます。', desc:'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'},
        {date: '2021.05.21', time: '23:25', title:'私の日記の記録が一部表示されます。', desc:'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'},
        {date: '2021.05.21', time: '23:25', title:'私の日記の記録が一部表示されます。', desc:'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'},
        {date: '2021.05.21', time: '23:25', title:'私の日記の記録が一部表示されます。', desc:'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'},
        {date: '2021.05.21', time: '23:25', title:'私の日記の記録が一部表示されます。', desc:'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'},
        {date: '2021.05.21', time: '23:25', title:'私の日記の記録が一部表示されます。', desc:'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'},
        {date: '2021.05.21', time: '23:25', title:'私の日記の記録が一部表示されます。', desc:'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'},
        {date: '2021.05.21', time: '23:25', title:'私の日記の記録が一部表示されます。', desc:'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'},
        {date: '2021.05.21', time: '23:25', title:'私の日記の記録が一部表示されます。', desc:'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'},
        {date: '2021.05.21', time: '23:25', title:'私の日記の記録が一部表示されます。', desc:'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'},
        {date: '2021.05.21', time: '23:25', title:'私の日記の記録が一部表示されます。', desc:'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'},
        {date: '2021.05.21', time: '23:25', title:'私の日記の記録が一部表示されます。', desc:'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'},
        {date: '2021.05.21', time: '23:25', title:'私の日記の記録が一部表示されます。', desc:'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'},
        {date: '2021.05.21', time: '23:25', title:'私の日記の記録が一部表示されます。', desc:'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'},
        {date: '2021.05.21', time: '23:25', title:'私の日記の記録が一部表示されます。', desc:'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'},
        {date: '2021.05.21', time: '23:25', title:'私の日記の記録が一部表示されます。', desc:'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'},
        {date: '2021.05.21', time: '23:25', title:'私の日記の記録が一部表示されます。', desc:'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'},
        {date: '2021.05.21', time: '23:25', title:'私の日記の記録が一部表示されます。', desc:'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'},
        {date: '2021.05.21', time: '23:25', title:'私の日記の記録が一部表示されます。', desc:'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'},
        {date: '2021.05.21', time: '23:25', title:'私の日記の記録が一部表示されます。', desc:'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'},
        {date: '2021.05.21', time: '23:25', title:'私の日記の記録が一部表示されます。', desc:'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'},
        {date: '2021.05.21', time: '23:25', title:'私の日記の記録が一部表示されます。', desc:'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'},
        {date: '2021.05.21', time: '23:25', title:'私の日記の記録が一部表示されます。', desc:'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'},
        {date: '2021.05.21', time: '23:25', title:'私の日記の記録が一部表示されます。', desc:'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'},
        {date: '2021.05.21', time: '23:25', title:'私の日記の記録が一部表示されます。', desc:'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'},
        {date: '2021.05.21', time: '23:25', title:'私の日記の記録が一部表示されます。', desc:'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'},
        {date: '2021.05.21', time: '23:25', title:'私の日記の記録が一部表示されます。', desc:'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'},
        {date: '2021.05.21', time: '23:25', title:'私の日記の記録が一部表示されます。', desc:'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'},
        {date: '2021.05.21', time: '23:25', title:'私の日記の記録が一部表示されます。', desc:'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'},
        {date: '2021.05.21', time: '23:25', title:'私の日記の記録が一部表示されます。', desc:'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'},
        {date: '2021.05.21', time: '23:25', title:'私の日記の記録が一部表示されます。', desc:'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'},
        {date: '2021.05.21', time: '23:25', title:'私の日記の記録が一部表示されます。', desc:'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'},
    ];

    chartOptions: any = {
      title: {
        text: '',
      },
      chart: {
        backgroundColor: 'rgba(46, 46, 46, 1)',
        type: 'line',
      },
      xAxis: {
          categories: ['6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月'],
          labels: {
            style: {
              color: '#fff' // Set the text color to red
            }
          }
      },
      yAxis: {
        title: {
          text: '',
          style: {
            color: '#fff' // Set the text color to red
          }
        },
        labels: {
          style: {
            color: '#fff' // Set the text color to red
          }
        }
      },
      series: [
        {
          name: '日',
          data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
          visible: true,
          showInLegend: false // Set showInLegend to false to hide the series name in the legend
        },
        {
          name: '週',
          data: [11.9, 52.5, 42.4, 41.2, 14.0, 76.0, 135.6, 120.5, 150.4, 170.1, 56.6, 41.4],
          visible: true,
          showInLegend: false // Set showInLegend to false to hide the series name in the legend
        },
        {
          name: '月',
          data: [30.5, 21.5, 42.4, 99.2, 160.0, 21.0, 85.6, 113.5, 199.4, 220.1, 50.6, 14.4],
          visible: true,
          showInLegend: false // Set showInLegend to false to hide the series name in the legend
        },
        {
          name: '年',
          data: [84.2, 14.5, 7.4, 99.2, 72.0, 71.0, 55.6, 60.5, 147.4, 123.1, 21.6, 88.4],
          visible: true,
          showInLegend: false // Set showInLegend to false to hide the series name in the legend
        }
      ],
    };

    chartSerries = [
      { name: '日', active: true },
      { name: '週', active: true },
      { name: '月', active: true },
      { name: '年', active: true }
    ]

    activateDeactivateSeries = (c: any, seriesName: string) => {
        const chart = c.current.chart;
        const series = chart.series.find((s: any ) => s.name === seriesName);
        if (series) {
          this.updateChartSeries(seriesName);
          const visible = !series.visible;
          series.setVisible(visible);
        }
    };

    updateChartSeries(seriesName: string) {
        const find = this.chartSerries.find((item: {name: string, active: boolean}) => item.name == seriesName);
        if (find) {
          find.active = !find.active;
          this.chartSerries = [...this.chartSerries];
        }
    }

    search() {
      this.displayCount = this.displayCount + this.defaultLoad;
      this.myDiaryShow = [...this.myDiary.slice(0, this.displayCount)];
      this.visibleBtnLoadMore = this.myDiaryShow.length < this.myDiary.length;
    }
}