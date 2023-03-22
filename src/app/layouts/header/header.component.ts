import { Component } from '@angular/core';
import { AppPathEnums } from '@typings/path-enums';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
appPathEnums = AppPathEnums


}
