import { Optional } from "@angular/core";
import { AppSubMenu, BaseInterface } from "@typings/app-typins";
import { SubSink } from "subsink";
import { SingletonService } from "../services/singleton.service";

export abstract class OperatorsBaseClass implements  BaseInterface  {
  submenu: AppSubMenu;
  subs: SubSink = new SubSink();
  resultCode: string;
  desc: string;
  title: string;

  abstract onSubmenuChanged(submenu: AppSubMenu);

  constructor(protected ss: SingletonService) {
  }


 onSubscription() {

  const nav$ =  this.ss?.onNavigationChanded$?.subscribe((submenu:AppSubMenu)=> {
      this.submenu = submenu;
      this.resultCode = ''
      this.title = this.submenu?.menuName
      this.onSubmenuChanged(submenu);
    })

    this.subs.add(nav$)
  }
}
