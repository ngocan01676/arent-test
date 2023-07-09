import { makeAutoObservable } from "mobx"
import note from '../assets/img/icon_memo.png'
import medal from '../assets/img/medal.png'
import icon_info from '../assets/img/icon_info.png'
import icon_menu from '../assets/img/icon_menu.png'

export class AppState {
    constructor() {
        makeAutoObservable(this)
    }
    menuIsOpen = false;
    iconMenu = icon_menu;
    listItemInHeader = [
        {label:'自分の記録', icon:note},
        {label:'チャレンジ', icon: medal},
        {label:'お知らせ', icon:icon_info}
    ]

    listItemInFooter: string[] = [
        '会員登録',
        '運営会社',
        '利用規約',
        '個人情報の取扱について',
        '特定商取引法に基づく表記',
        'お問い合わせ'
    ]

    menu: string[] = [
        "自分の記録",
        "体重グラフ",
        "目標",
        "選択中のコース",
        "コラム一覧",
        "設定"
    ]

    toggleMenu() {
      this.menuIsOpen = !this.menuIsOpen;
    }
}