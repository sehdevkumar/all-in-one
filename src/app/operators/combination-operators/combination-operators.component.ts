import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core'
import { AppSubMenu } from '@typings/app-typins'
import { combineLatest, of } from 'rxjs'
import { SingletonService } from 'src/app/services/singleton.service'
import { OperatorsBaseClass } from 'src/app/sharedClass/operator-base-class'

@Component({
  selector: 'app-combination-operators',
  templateUrl: './combination-operators.component.html',
  styleUrls: ['./combination-operators.component.scss'],
})
export class CombinationOperatorsComponent extends OperatorsBaseClass
  implements OnDestroy, OnInit {
  constructor(ss: SingletonService) {
    super(ss)
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }
  ngOnInit(): void {
    this.onSubscription()
  }
  onSubmenuChanged(submenu: AppSubMenu) {
    switch (submenu?.menuName) {
      case 'combineLatest':
        this.onCombineLatest()
        return
      case 'concat':
        this.onConcat()
        return
      case 'merge':
        return
      case 'race':
        return
      case 'startWith':
        return
      case 'withLatestFrom':
        return
      case 'zip':
        return
    }
  }

  onCombineLatest() {
    const ob1 = of(1, 2, 3, 4)
    const ob2 = of(1, 2, 3, 4)

    let result = ''

    const sub = combineLatest([ob1, ob2]).subscribe((res) => {
      console.log(res)
      result = res?.toLocaleString()
    })

    this.subs.add(sub)

    this.desc = `combineLatest is a function in RxJS (Reactive Extensions for JavaScript) that combines the latest values emitted by multiple observables into a single observable. This operator waits for each of the observables to emit at least one value and then produces a new value every time any of the source observables emits a new value.

      In this example, we import the combineLatest and of functions from RxJS. We create two observables, observable1 and observable2, which emit the values 'hello' and 'world' respectively. We then pass an array containing both observables to the combineLatest function, which returns a new observable that combines the latest values emitted by both observables.

Finally, we subscribe to the combinedObservable and log the latest values emitted by it. In this case, the output will be 'hello world'.

Note that combineLatest can also take any number of observables as arguments instead of an array. Additionally, it will emit a new value whenever any of the source observables emit a new value, even if some of the other source observables haven't emitted a value recently.

      `


      this.resultCode = `const ob1 = of(1, 2, 3, 4)
    const ob2 = of(1, 2, 3, 4, 5, 6, 7, 8, 9)

    const sub = combineLatest([ob1, ob2]).subscribe((res) => {
      console.log(res) // ${result}
    })
`
  }



  onConcat() {

  }


}
