import { SubSink } from 'subsink'

export interface AppMenuConfig {
  menuName: string;
  menuIcon: string;
  menuActivation: boolean;
  subMenu?: Array<AppSubMenu>
}

export interface AppSubMenu {
  menuName: string
  menuIcon: string
  menuActivation: boolean
  subMenu?: Array<AppSubMenu>
}

export interface BaseInterface {
  submenu: AppSubMenu
  subs: SubSink

  resultCode: string
  desc: string

  title: string
}
