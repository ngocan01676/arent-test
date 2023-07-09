import { observer, Observer } from 'mobx-react-lite'
import React, { useRef } from 'react'
import './style.scss'
import { useVm } from '../../../hooks/useVm';
import { MyRecordViewmodel } from '../viewmodel/myrecord.viewmodel';
import { sliceText } from '../../../helper/ulti.helper';
import HighchartsReactOfficial from 'highcharts-react-official';


export const MyRecordPage:React.FC = observer(() => {
  const viewmodel = useVm<MyRecordViewmodel>(MyRecordViewmodel);
  const containerRef = useRef(null);
  const activateDeactivateSeries = (c: any, seriesName: string) => {
    viewmodel.activateDeactivateSeries(c, seriesName);
  }
  return <>
    <div className="my-record-page-container container">
        <div className="top-data">
            {viewmodel.topData.map((item: {title: string, img: string, label: string}, index: number) => (
                <div className="item" key={index}>
                    <img src={item.img} alt="" />
                    <div className="content">
                        <h4>{item.label}</h4>
                        <p>{item.title}</p>
                    </div>
                </div>
            ))}
        </div>
        <div className='my-record'>
            <div className="top d-flex">
                <h3>BODY<br/>RECORD</h3>
                <span>2021.05.21</span>
            </div>
            <div className="my-chart">
                <div className="chart-container">
                    <HighchartsReactOfficial options={{...viewmodel.chartOptions}} ref={containerRef} />
                </div>
                <div className="chart-series">
                    <ul>
                        {viewmodel.chartSerries.map((item: {name:string, active: boolean}, index: number) => (
                            <li className={`item d-flex ${item.active ? 'active' : ''}`}  key={index} onClick={() => {activateDeactivateSeries(containerRef,item.name)}}>
                                <span>{item.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        <div className="my-exercise">
            <div className="top d-flex">
                <h3>MY<br/>MY EXERCISE</h3>
                <span>2021.05.21</span>
            </div>
            <div className="content-body">
                <ul>
                    {viewmodel.myExercise.map((item: {title: string, time: string, unit: string}, index: number) => (
                        <li className="item d-flex" key={index}>
                            <div className="content-left">
                                <p className='title'>{item.title}</p>
                                <p className='unit'>{item.unit}</p>
                            </div>
                            <div className="content-right">
                                <span className='time'>{item.time}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <div className="my-diary">
            <div className="list-item">
                {viewmodel.myDiaryShow.map((item: {date: string, time: string, title: string, desc: string}, index: number) => (
                    <Observer key={index}>
                    {() =>
                    <div className="item" key={index}>
                        <p className='date'>{item.date}</p>
                        <p className='time'>{item.time}</p>
                        <p className='title'>{item.title}</p>
                        <p className='title' title={item.desc}>{sliceText(item.desc,50)}</p>
                    </div>}
                    </Observer>
                ))}
                </div>
            </div>
            <div className='load-more'>
                    {viewmodel.visibleBtnLoadMore && (
                        <button onClick={() => {viewmodel.search()}}>自分の日記をもっと見る</button>
                    )}
            </div>  
        </div>
    </>
  })