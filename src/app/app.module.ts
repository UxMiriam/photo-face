import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { IdPhotoComponent } from './id-photo/id-photo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderStepComponent } from './components/header-step/header-step.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    IdPhotoComponent,
    NavbarComponent,
    HeaderStepComponent,
    VideoPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
