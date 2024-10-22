import { observer } from 'mobx-react-lite'
import React from 'react'
import './style.scss'
import { useVm } from '../../hooks/useVm'
import { AppState } from '../../store/AppState'
import logo from './../../assets/img/logo.png';
import icon_close from './../../assets/img/icon_close.png';


export const Header:React.FC = observer(() => {
    const vm = useVm<AppState>(AppState);
    return <>
      <header>
        <div className="container d-flex">
            <div className="block-left d-flex">
                <img src={logo} alt="logo" />
                <div className="header-top-menu show-ondesktop">
                {vm.listItemInHeader.map((item: { label: string, icon: string}, index: number) => (
                  <div className="item" key={index}>
                    <img src={item.icon} alt="icon" />
                    <span>{item.label}</span>
                  </div>
                ))}
                </div>
            </div>
            <div className="block-right">
              <img src={vm.iconMenu} alt="icon menu" onClick={() => vm.toggleMenu()}/>
            </div>
        </div>
        <div className={`menu ${vm.menuIsOpen ? 'active' : ''}`} >
            <img src={icon_close} alt="icon_close" onClick={() => vm.toggleMenu()}/>
            <div className="header-top-menu-mobile show-onMobile">
                {vm.listItemInHeader.map((item: { label: string, icon: string}, index: number) => (
                  <div className="item" key={index}>
                    <img src={item.icon} alt="icon" />
                    <span>{item.label}</span>
                  </div>
                ))}
            </div>
            <ul>
              {vm.menu.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
        </div>
      </header>
    </>
  })