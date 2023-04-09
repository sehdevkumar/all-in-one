import {
  AfterContentInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core'
import { d3BaseSelection, PlatFormClassesEnum } from '@typings/platform-typins'
import * as d3 from 'd3'
import { easeBounce, easeCircleIn, easeElasticIn, easeSinInOut } from 'd3'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements AfterContentInit {

  ngAfterContentInit(): void {

  }
}
