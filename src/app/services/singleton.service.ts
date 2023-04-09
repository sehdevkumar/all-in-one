import { Injectable } from '@angular/core';
import { AppSubMenu } from '@typings/app-typins';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SingletonService {

  onNavigationChanded$:Subject<AppSubMenu> = new Subject<AppSubMenu>()


  constructor() { }
}
