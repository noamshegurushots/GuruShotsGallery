import { Component, OnInit, Renderer2 } from '@angular/core';

import { ImagesService } from './services/images.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  images: any = [];

  // Modal
  isModalOpen: boolean = false;
  selectedImageIndex = null;

  constructor(private imageService:ImagesService,
              private renderer: Renderer2) {}

  ngOnInit() {
    this.getImages();
  }

  // Get image stack from service
  getImages() {
    this.imageService.getImages()
      .subscribe((data) => {
          this.images = data;
        }
      );
  }

  // Open image in modal
  openModal(imageIndex) {
    this.selectedImageIndex = imageIndex;

    setTimeout(() => {
      this.isModalOpen = true;
      // Lock Body
      this.renderer.addClass(document.body, 'lock');
    }, 200)
  }

  // Close Modal
  closeModal() {
    this.isModalOpen = false;

    setTimeout(() => {
      this.selectedImageIndex = null;
      // Unlock Body
      this.renderer.removeClass(document.body, 'lock');
    }, 200)
  }
}
