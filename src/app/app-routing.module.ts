import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AppPathEnums } from '@typings/path-enums'
import { LandingPageComponent } from '@components/landing-page/landing-page.component'
import { LoginComponent } from '@components/login/login.component'
import { PageNotFoundComponent } from '@components/page-not-found/page-not-found.component'

const routes: Routes = [
  {
    path: AppPathEnums.LANDING_PAGE,
    component: LandingPageComponent,
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
