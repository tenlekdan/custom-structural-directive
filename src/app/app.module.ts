import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HideDirectiveDirective } from './hide-directive.directive';

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [AppComponent, HideDirectiveDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
