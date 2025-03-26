import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './basic/components/login/login.component';
import { SignupComponent } from './basic/components/signup/signup.component';
import { DemoNgZorroAntModule } from './DemoNgZorroAntModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    DemoNgZorroAntModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserModule
  ]
})
export class AppModule { }
