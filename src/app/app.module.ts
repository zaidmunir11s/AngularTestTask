import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/public-layout/header/header.component';
import { FooterComponent } from './components/public-layout/footer/footer.component';
import { HomeComponent } from './components/public-layout/home/home.component';
import { PublicLayoutComponent } from './components/public-layout/public-layout.component';
import { PriceComponent } from './components/public-layout/price/price.component';
import { AboutComponent } from './components/public-layout/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PublicLayoutComponent,
    PriceComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
