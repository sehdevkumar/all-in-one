import { Directive, ElementRef, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import hljs from 'highlight.js';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements AfterViewInit, OnChanges {

  constructor(private el: ElementRef) {}


  ngOnChanges(changes: SimpleChanges): void {
   hljs.highlightBlock(this.el.nativeElement);
    console.log('hello ')
  }

  ngAfterViewInit(): void {
    hljs.highlightBlock(this.el.nativeElement);
    console.log('hello ')
  }
}
