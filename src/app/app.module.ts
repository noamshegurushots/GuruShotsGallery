import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GalleryLightboxComponent } from './components/gallery-lightbox/gallery-lightbox.component';

import { ImagesService } from './services/images.service';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    GalleryLightboxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ImagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
