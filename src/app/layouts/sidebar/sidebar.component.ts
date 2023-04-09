import { AppMenu } from './../../configs/app-config';
import { Component } from '@angular/core';
import { AppMenuConfig, AppSubMenu } from '@typings/app-typins';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Route, Router } from '@angular/router';
import { SingletonService } from 'src/app/services/singleton.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('collapseExpand', [
      state('collapsed', style({ height: '0px', padding: '0px', overflow: 'hidden' })),
      state('expanded', style({ height: '*', padding: '*', overflow: 'hidden' })),
      transition('collapsed => expanded', [
        animate('250ms ease-out')
      ]),
      transition('expanded => collapsed', [
        animate('250ms ease-out')
      ])
    ])
  ]
})
export class SidebarComponent {

  appMenu:Array<AppMenuConfig> = AppMenu


  constructor(private route: Router,private ss:SingletonService) {

  }


  onMenuClicked(menu:AppMenuConfig) {

    if(menu.menuActivation) {
         menu.menuActivation = false
         return;
    }
    this.appMenu.forEach(menu=> {
      menu.menuActivation = false
      menu.subMenu?.forEach(sm=> {
        sm.menuActivation = false;
      })
    })
    menu.menuActivation =  true
     if(menu.menuActivation) {
       this.onNavigate(menu);
     }
  }

  onSubMenuItemClicked(menu:AppMenuConfig,submenu: AppSubMenu) {
        this.appMenu.forEach(menu=> {
          menu.subMenu?.forEach(sm=> {
            sm.menuActivation = false;
          })
         })
    submenu.menuActivation = true;


    this.ss.onNavigationChanded$.next(submenu);

  }


  onNavigate(menu : AppMenuConfig) {
     const path = menu?.menuName?.replace(' ','-').toLowerCase()
     this.route.navigate([path]);
  }

}
