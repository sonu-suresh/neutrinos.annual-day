import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
   import { ReactiveFormsModule } from '@angular/forms';
   import { FormlyModule } from '@ngx-formly/core';
   import { FormlyMaterialModule } from '@ngx-formly/material';
   import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
     ReactiveFormsModule,
  FormlyModule.forRoot(),
  FormlyMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
