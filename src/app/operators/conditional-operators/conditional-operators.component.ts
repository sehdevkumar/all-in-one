import { OperatorsBaseClass } from './../../sharedClass/operator-base-class';
import { defaultIfEmpty, every, last, Observable, of, sequenceEqual, Subject } from 'rxjs';
import { SingletonService } from 'src/app/services/singleton.service';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppSubMenu } from '@typings/app-typins';
import hljs from 'highlight.js';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-conditional-operators',
  templateUrl: './conditional-operators.component.html',
  styleUrls: ['./conditional-operators.component.scss']
})
export class ConditionalOperatorsComponent extends OperatorsBaseClass implements OnInit ,OnDestroy {




  constructor(private router:Router, ss: SingletonService) {
    super(ss);
  }


  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }
  ngOnInit(): void {
    this.onSubscription()
  }

   onSubmenuChanged(submenu:AppSubMenu) {

    switch(submenu?.menuName) {
       case 'defaultIfEmpty':
        this.onDefaultEmptyOperatort()
        return;

        case 'every':
        this.onEveryOperatort()
        return;

        case 'sequenceEqual':
        this.onSequenceEqualOperatort()
        return;

    }


  }


  onDefaultEmptyOperatort() {
      const defaultEmptyObservable1 = of(2323)
     const s1 =   defaultEmptyObservable1.pipe(defaultIfEmpty('hello world')).subscribe((res)=> {
           console.log(res)
       })

       const defaultEmptyObservable2 = of()
     const s2 =   defaultEmptyObservable2.pipe(defaultIfEmpty('hello world')).subscribe((res)=> {
           console.log(res)
       })



       this.desc = `defaultIfEmpty: This operator is used to provide a default value if the source Observable completes without emitting any values. In the onDefaultEmptyOperatort function, we create an Observable defaultEmptyObservable that emits a single value of 2323. We then use the defaultIfEmpty operator to provide a default value of 'hello world' if the source Observable defaultEmptyObservable completes without emitting any values. The output of this function will be 2323, because defaultEmptyObservable emits a value.`;


       this.resultCode = `const defaultEmptyObservable1 = of(2323)
              defaultEmptyObservable1.pipe(defaultIfEmpty('hello world')).subscribe((res)=> {
                  console.log(res) // 2323
             })

     const defaultEmptyObservable2 = of()
       defaultEmptyObservable2.pipe(defaultIfEmpty('hello world')).subscribe((res)=> {
           console.log(res) // hello world
       })`


       this.subs.add(s1,s2)
  }

    onEveryOperatort() {
      const everyObservable = of(true,true,true)
    const b1 =    everyObservable.pipe(every((res)=> res===true)).subscribe((res)=> {
           console.log(res)
       })


       this.desc = `every: This operator is used to check if every value emitted by the source Observable satisfies a condition. In the onEveryOperatort function, we create an Observable everyObservable that emits three boolean values of true. We then use the every operator to check if every value emitted by everyObservable is equal to true. Since all the values are true, the output of this function will be true.`;

       this.resultCode = `const everyObservable = of(true,true,true)
       everyObservable.pipe(every((res)=> res===true)).subscribe((res)=> {
           console.log(res);
       })`;

       this.subs.add(b1)
  }

    onSequenceEqualOperatort() {

      const sequenceEqualOperatort = of(1,2)
      const comparator = of(1,2)

    const b1 =    sequenceEqualOperatort.pipe(sequenceEqual(comparator)).subscribe((res)=> {
           console.log(res)
       })

       this.desc = 'sequenceEqual: This operator is used to compare the values emitted by two Observables in sequence. In the onSequenceEqualOperatort function, we create two Observables sequenceEqualOperatort and comparator that emit the values 1 and 2 in the same order. We then use the sequenceEqual operator to compare the two Observables, and since they emit the same values in the same order, the output of this function will be true.'

       this.resultCode = ` const sequenceEqualOperatort = of(1,2)
      const comparator = of(1,2)

       sequenceEqualOperatort.pipe(sequenceEqual(comparator)).subscribe((res)=> {
           console.log(res)
       })`

     this.subs.add(b1)
  }

}
