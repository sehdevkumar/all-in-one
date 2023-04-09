import { Component, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import hljs from 'highlight.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit , AfterViewInit {

  constructor(private elRef: ElementRef) {

  }
  ngAfterViewInit(): void {
  }



  ngOnInit(): void {

  }
}
