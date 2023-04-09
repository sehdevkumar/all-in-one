import { ConditionalOperatorsComponent } from './operators/conditional-operators/conditional-operators.component';
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AppPathEnums } from '@typings/path-enums'
import { LandingPageComponent } from '@components/landing-page/landing-page.component'
import { LoginComponent } from '@components/login/login.component'
import { PageNotFoundComponent } from '@components/page-not-found/page-not-found.component'
import { RxjsPageComponent } from './rxjs-page/rxjs-page.component'
import { CombinationOperatorsComponent } from './operators/combination-operators/combination-operators.component';

const routes: Routes = [
  {
    path: AppPathEnums.LANDING_PAGE,
    component: LandingPageComponent,
  },
  {
    path: AppPathEnums.HOME,
    component:RxjsPageComponent
  },
  {
    path:AppPathEnums.CONDITIONAL_OPERATOR,
    component: ConditionalOperatorsComponent
  },
  {
    path:AppPathEnums.COMBINATION_OPERATOR,
    component: CombinationOperatorsComponent
  },
  {
    path: '',
    redirectTo: AppPathEnums.LANDING_PAGE,
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
