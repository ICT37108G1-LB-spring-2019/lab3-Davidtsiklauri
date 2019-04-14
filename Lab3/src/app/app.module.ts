import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentManagmentComponent } from './student-managment/student-managment.component';
import { StudentItemComponent } from './student-item/student-item.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentManagmentComponent,
    StudentItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
