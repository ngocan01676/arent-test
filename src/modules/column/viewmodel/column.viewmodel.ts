import { makeAutoObservable } from "mobx";
import column_1 from '../../../assets/img/column-1.png'
import column_2 from '../../../assets/img/column-2.png'
import column_3 from '../../../assets/img/column-3.png'
import column_4 from '../../../assets/img/column-4.png'
import column_5 from '../../../assets/img/column-5.png'
import column_6 from '../../../assets/img/column-6.png'
import column_7 from '../../../assets/img/column-7.png'
import column_8 from '../../../assets/img/column-8.png'

export class ColumnViewmodel {
  constructor() {
    makeAutoObservable(this)
    this.search();
  }

  topData = [
    {title: 'RECOMMENDED',label:'COLUMN', text: 'オススメ'},
    {title: 'RECOMMENDED',label:'DIET', text: 'ダイエット'},
    {title: 'RECOMMENDED',label:'BEAUTY', text: '美容'},
    {title: 'RECOMMENDED',label:'HEALTH', text: '健康'}
  ]

  botomData = [
    { img:column_1, title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', date: '2021.05.17 23:25', tag: '#魚料理 #和食 #DHA' },
    { img:column_2, title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', date: '2021.05.17 23:25', tag: '#魚料理 #和食 #DHA' },
    { img:column_3, title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', date: '2021.05.17 23:25', tag: '#魚料理 #和食 #DHA' },
    { img:column_4, title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', date: '2021.05.17 23:25', tag: '#魚料理 #和食 #DHA' },
    { img:column_5, title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', date: '2021.05.17 23:25', tag: '#魚料理 #和食 #DHA' },
    { img:column_6, title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', date: '2021.05.17 23:25', tag: '#魚料理 #和食 #DHA' },
    { img:column_7, title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', date: '2021.05.17 23:25', tag: '#魚料理 #和食 #DHA' },
    { img:column_8, title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', date: '2021.05.17 23:25', tag: '#魚料理 #和食 #DHA' },
    { img:column_1, title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', date: '2021.05.17 23:25', tag: '#魚料理 #和食 #DHA' },
    { img:column_2, title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', date: '2021.05.17 23:25', tag: '#魚料理 #和食 #DHA' },
    { img:column_3, title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', date: '2021.05.17 23:25', tag: '#魚料理 #和食 #DHA' },
    { img:column_4, title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', date: '2021.05.17 23:25', tag: '#魚料理 #和食 #DHA' },
    { img:column_5, title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', date: '2021.05.17 23:25', tag: '#魚料理 #和食 #DHA' },
    { img:column_6, title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', date: '2021.05.17 23:25', tag: '#魚料理 #和食 #DHA' },
    { img:column_7, title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', date: '2021.05.17 23:25', tag: '#魚料理 #和食 #DHA' },
    { img:column_8, title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', date: '2021.05.17 23:25', tag: '#魚料理 #和食 #DHA' },
    { img:column_1, title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', date: '2021.05.17 23:25', tag: '#魚料理 #和食 #DHA' },
    { img:column_2, title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', date: '2021.05.17 23:25', tag: '#魚料理 #和食 #DHA' },
    { img:column_3, title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', date: '2021.05.17 23:25', tag: '#魚料理 #和食 #DHA' },
    { img:column_4, title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', date: '2021.05.17 23:25', tag: '#魚料理 #和食 #DHA' },
    { img:column_5, title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', date: '2021.05.17 23:25', tag: '#魚料理 #和食 #DHA' },
    { img:column_6, title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', date: '2021.05.17 23:25', tag: '#魚料理 #和食 #DHA' },
    { img:column_7, title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', date: '2021.05.17 23:25', tag: '#魚料理 #和食 #DHA' },
    { img:column_8, title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ', date: '2021.05.17 23:25', tag: '#魚料理 #和食 #DHA' }
  ]

  displayCount: number = 0;
  defaultLoad: number = 8;
  botomDataShow: {img: string, date: string, tag: string, title: string}[] = [];
  currentTypeFilter: string = '';
  visibleBtnLoadMore: boolean = true;
  search() {
    this.displayCount = this.displayCount + this.defaultLoad;
    this.botomDataShow = [...this.botomData.slice(0, this.displayCount)];
    this.visibleBtnLoadMore = this.botomDataShow.length < this.botomData.length;
  }
}