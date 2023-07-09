import { observer, Observer } from 'mobx-react-lite'
import React from 'react'
import './style.scss'
import { useVm } from '../../../hooks/useVm';
import { MypageViewmodel } from '../viewmodel/mypage.viewmodel';
import HighchartsReactOfficial from 'highcharts-react-official';


export const MyPage:React.FC = observer(() => {
  const viewmodel = useVm<MypageViewmodel>(MypageViewmodel);
  return <>
    <div className="my-page-container">
      <div className="block-top d-flex">
        <div className="block-image">
          <img src={viewmodel.blockTopLeftInfo.img} alt="block top" />
          <div className='content-wrapper'>
            <div className="progress">
              <span className="title timer" data-from="0" data-to="75" data-speed="1500">
                <span className='date'>{viewmodel.blockTopLeftInfo.date}</span>
                <span className='process-text'>{viewmodel.blockTopLeftInfo.process}</span>
              </span>
              <div className="overlay"></div>
              <div className="left"></div>
              <div className="right"></div>
            </div>
          </div>
        </div>
        <div className="my-chart">
          <HighchartsReactOfficial options={{...viewmodel.chartOptions}} />
        </div>
      </div>
      <div className="container">
        <div className='block-hexagon'>
          {viewmodel.hexagonList.map((item: {title: string, icon: string, type: string}, index: number) => (
              <div className="hex-container" key={index} onClick={() => {
                viewmodel.search(item.type)
              }}>
                <div className="hexagon d-flex">
                  <img src={item.icon} alt="" />
                  <div className="mytext">{item.title}</div>
                </div>
              </div>
          ))}
        </div>
        <div className="list-item">
          {viewmodel.refectionDataShow.map((item: {img: string, time: string, type: string}, index: number) => (
             <Observer key={index}>
              {() =>
              <div className="item" key={index}>
                <img src={item.img} alt="" />
                <span>{item.time}</span>
              </div>}
             </Observer>
          ))}
        </div>
        <div className='load-more'>
          {viewmodel.visibleBtnLoadMore && (
            <button onClick={() => {
              viewmodel.search()
            }}>記録をもっと見る</button>
          )}
        </div>
      </div>
    </div>
    </>
  })