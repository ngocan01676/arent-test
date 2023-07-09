import { makeAutoObservable } from "mobx";
import icon_knife from '../../../assets/img/icon_knife.png'
import { BlockTopLeftInfo } from "../model/mypage.model";
import icon_cup from '../../../assets/img/icon_cup.png'
import main_photo from '../../../assets/img/main_photo.png'
//import dataJson from '../../../mocks/data-refection.json';

import refection_1 from '../../../assets/img/d01.png'
import refection_2 from '../../../assets/img/d02.png'
import refection_3 from '../../../assets/img/l02.png'
import refection_4 from '../../../assets/img/l03.png'
import refection_5 from '../../../assets/img/l104.png'
import refection_6 from '../../../assets/img/m01.png'
import refection_7 from '../../../assets/img/s01.png'


export class MypageViewmodel {
    constructor() {
        makeAutoObservable(this)
        this.search();
    }

    blockTopLeftInfo: BlockTopLeftInfo = {
        img: main_photo,
        date: '05/21',
        process: '75%'
    };
    hexagonList: {title: string, icon: string, type: string}[] = [
        { title:'Morning', icon: icon_knife, type:'morning' },
        { title:'Lunch', icon: icon_knife,type:'lunch'  },
        { title:'Dinner', icon: icon_knife, type:'dinner'  },
        { title:'Snack', icon: icon_cup, type:'snack'  }
    ]
    displayCount: number = 0;
    defaultLoad: number = 8;
    refectionDataShow: {img: string, time: string, type: string}[] = [];
    currentTypeFilter: string = '';
    visibleBtnLoadMore = true;
    refectionData = [
        {img: refection_1,time: '05/21.Morning',type:'morning'},
        {img: refection_2,time: '05/21.Lunch',type:'lunch'},
        {img: refection_3,time: '05/21.Dinner',type:'dinner'},
        {img: refection_4,time: '05/21.Snack',type:'snack'},
        {img: refection_5,time: '05/21.Lunch',type:'lunch'},
        {img: refection_7,time: '05/21.Dinner',type:'dinner'},
        {img: refection_1,time: '05/21.Morning',type:'morning'},
        {img: refection_2,time: '05/21.Lunch',type:'lunch'},
        {img: refection_1,time: '05/21.Morning',type:'morning'},
        {img: refection_2,time: '05/21.Lunch',type:'lunch'},
        {img: refection_3,time: '05/21.Dinner',type:'dinner'},
        {img: refection_4,time: '05/21.Snack',type:'snack'},
        {img: refection_5,time: '05/21.Lunch',type:'lunch'},
        {img: refection_6,time: '05/21.Dinner',type:'dinner'},
        {img: refection_1,time: '05/21.Morning',type:'morning'},
        {img: refection_2,time: '05/21.Lunch',type:'lunch'},
        {img: refection_1,time: '05/21.Morning',type:'morning'},
        {img: refection_2,time: '05/21.Lunch',type:'lunch'},
        {img: refection_3,time: '05/21.Dinner',type:'dinner'},
        {img: refection_4,time: '05/21.Snack',type:'snack'},
        {img: refection_5,time: '05/21.Lunch',type:'lunch'},
        {img: refection_6,time: '05/21.Dinner',type:'dinner'},
        {img: refection_1,time: '05/21.Morning',type:'morning'},
        {img: refection_2,time: '05/21.Lunch',type:'lunch'},
        {img: refection_1,time: '05/21.Morning',type:'morning'},
        {img: refection_2,time: '05/21.Lunch',type:'lunch'},
        {img: refection_3,time: '05/21.Dinner',type:'dinner'},
        {img: refection_4,time: '05/21.Snack',type:'snack'},
        {img: refection_5,time: '05/21.Lunch',type:'lunch'},
        {img: refection_6,time: '05/21.Dinner',type:'dinner'},
        {img: refection_1,time: '05/21.Morning',type:'morning'},
        {img: refection_2,time: '05/21.Lunch',type:'lunch'},

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
            name: 'Series 1',
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            showInLegend: false // Set showInLegend to false to hide the series name in the legend
          },
          {
            name: 'Series 2',
            data: [11.9, 52.5, 42.4, 41.2, 14.0, 76.0, 135.6, 120.5, 150.4, 170.1, 56.6, 41.4],
            showInLegend: false // Set showInLegend to false to hide the series name in the legend
          }
        ]
    };

    search(filterSearch?:string) {

        if (filterSearch) {
            this.displayCount = this.defaultLoad;
            this.currentTypeFilter = filterSearch;
            const temp = this.refectionData.filter(x => x.type == this.currentTypeFilter);
            this.refectionDataShow = [...temp.slice(0, this.displayCount)];
            this.visibleBtnLoadMore = this.refectionDataShow.length < temp.length;
        } else {
            this.displayCount = this.displayCount + this.defaultLoad;
            if (this.currentTypeFilter) {
                const temp = [...this.refectionData.filter(x => x.type == this.currentTypeFilter)];
                this.refectionDataShow = [...temp.slice(0, this.displayCount)];
                this.visibleBtnLoadMore = this.refectionDataShow.length < temp.length;
            } else {
                this.refectionDataShow = [...this.refectionData.slice(0, this.displayCount)];
                this.visibleBtnLoadMore = this.refectionDataShow.length < this.refectionData.length
            }
        }
    }


}