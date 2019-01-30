import { Component, OnChanges, EventEmitter, Input, Output, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'gurushot-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnChanges {
  @Input() images: any;
  @Output() selectedImage = new EventEmitter<number>();

  // Gallery
  gallery: any = [];
  offset: number = 0;
  limit: number = 0;
  isLoading: boolean = false;

  constructor(private renderer: Renderer2) {}

  ngOnChanges() {
    // this.addImages()
    this.limit = this.images.length;

    this.offset += 20;
    this.gallery = this.images.slice(0, this.offset);
  }

  // Add gallery to gallery
  addImages() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
      this.offset += 20;
      this.gallery = this.images.slice(0, this.offset);
    }, 1500)
  }

  // Open Image
  openImage(imageIndex) {
    this.selectedImage.emit(imageIndex);
  }

  // Listen to scroll, if is less then 120px from bottom load more gallery
  @HostListener("window:scroll", [])
  onWindowScroll() {
    let scrollHeight, totalHeight;
    scrollHeight = document.body.scrollHeight;
    totalHeight = window.scrollY + window.innerHeight;
    if(totalHeight >= scrollHeight) {
      if(this.offset < this.limit) {
        this.addImages();
      }
    }
  }
}
