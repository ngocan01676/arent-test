import { observer, Observer } from 'mobx-react-lite'
import React from 'react'
import './style.scss'
import { useVm } from '../../../hooks/useVm';
import { ColumnViewmodel } from '../viewmodel/column.viewmodel';
import { sliceText } from '../../../helper/ulti.helper';


export const MyColumn:React.FC = observer(() => {
    const viewmodel = useVm<ColumnViewmodel>(ColumnViewmodel);
    return <>
        <div className="container column-page">
            <div className="top-data">
            {viewmodel.topData.map((item: {title: string,label: string, text: string}, index: number) => (
                <div className="item" key={index}>
                    <div className="title sub">{item.title}</div>
                    <div className="label sub">{item.label}</div>
                    <div className="line"></div>
                    <div className="text">{item.text}</div>
                </div>
            ))}
            </div>
            <div className='bottom-data d-flex'>
                {viewmodel.botomDataShow.map((item: {title: string,tag: string, date: string, img:string}, index: number) => (
                    <Observer key={index}>
                    {() =>
                        <div className="item" key={index}>
                        <div className="img">
                            <img src={item.img} alt="Image column" />
                            <div className='date'>{item.date}</div>
                        </div>
                        <div className="title" title={item.title}>
                            {sliceText(item.title,30)}
                        </div>
                        <div className="tag">
                            {item.tag}
                        </div>
                    </div>}
                    </Observer>
                ))}
            </div>
            <div className='load-more'>
                {viewmodel.visibleBtnLoadMore && (
                    <button onClick={() => {
                        viewmodel.search()
                    }}>コラムをもっと見る</button>
                )}
            </div>  
        </div>
    </>
  })