import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './template/footer/footer.component';
import { SecurityModule } from './security/security.module';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './template/navbar/navbar.component';
import { HeroComponent } from './template/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SecurityModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
