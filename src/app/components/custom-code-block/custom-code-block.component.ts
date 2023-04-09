import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import hljs from 'highlight.js';

@Component({
  selector: 'app-custom-code-block',
  templateUrl: './custom-code-block.component.html',
  styleUrls: ['./custom-code-block.component.scss']
})
export class CustomCodeBlockComponent implements OnChanges {

  @ViewChild('codeRef') codeRef:ElementRef<any>

  @Input() title:string;
  @Input() desc:string;
  @Input() code:string;

  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(()=> {
      this.codeRef.nativeElement.innerHTML = this.code
      hljs.highlightBlock(this.codeRef?.nativeElement);
    },1000)
  }

}
