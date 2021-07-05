import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCommonModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {MatGridListModule} from '@angular/material/grid-list';
import {StringValidatePipe} from "./string-validate.pipe";


@NgModule({
  declarations: [
    AppComponent,
    StringValidatePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCommonModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
