import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { FooterComponent } from './footer/footer.component';
import { ContentDetailsComponent } from './content-details/content-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BlogPageComponent,
    AboutPageComponent,
    FooterComponent,
    ContentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
