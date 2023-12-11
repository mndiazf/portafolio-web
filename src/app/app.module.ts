import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './UI/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutMeComponent } from './UI/about-me/about-me.component';
import { ProyectsComponent } from './UI/proyects/proyects.component';
import { GithubProyectsComponent } from './UI/github-proyects/github-proyects.component';
import { ContactComponent } from './UI/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './UI/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    ProyectsComponent,
    GithubProyectsComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
