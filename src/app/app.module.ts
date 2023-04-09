import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from '@components/landing-page/landing-page.component';
import { LoginComponent } from '@components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderComponent } from './layouts/header/header.component';
import { MaterialModule } from './material-module';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { RxjsPageComponent } from './rxjs-page/rxjs-page.component';
import { ConditionalOperatorsComponent } from './operators/conditional-operators/conditional-operators.component';

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import { HighlightDirective } from './directives/codeHighlight';
import { CustomCodeBlockComponent } from './components/custom-code-block/custom-code-block.component';
import { CombinationOperatorsComponent } from './operators/combination-operators/combination-operators.component';

hljs.registerLanguage('javascript', javascript);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    PageNotFoundComponent,
    HeaderComponent,
    SidebarComponent,
    RxjsPageComponent,
    ConditionalOperatorsComponent,
    HighlightDirective,
    CustomCodeBlockComponent,
    CombinationOperatorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
