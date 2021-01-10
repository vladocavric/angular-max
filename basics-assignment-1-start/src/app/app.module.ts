import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AutoComponentComponent } from './auto-component/auto-component.component';
import {ManualCompComponent} from './manual-comp/manual-comp.component'

@NgModule({
  declarations: [
    AppComponent,
    AutoComponentComponent,
    ManualCompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
