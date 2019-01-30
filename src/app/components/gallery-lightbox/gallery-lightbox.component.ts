import { Component, OnChanges, EventEmitter, Input, Output, HostListener } from '@angular/core';

@Component({
  selector: 'gurushot-gallery-lightbox',
  templateUrl: './gallery-lightbox.component.html',
  styleUrls: ['./gallery-lightbox.component.scss']
})
export class GalleryLightboxComponent implements OnChanges {
  @Input() images: any;
  @Input() imageIndex: number;
  @Output() closeModalEvent = new EventEmitter<boolean>();

  // Selected Image
  item;

  constructor() {}

  ngOnChanges() {
    if(this.imageIndex >= 0){
      this.item = this.images[this.imageIndex];
      console.log(this.item);
    }
  }

  // Send event to close modal
  closeModal() {
    this.closeModalEvent.emit(false);
    this.imageIndex = null;
  }

  // Next Image
  nextImage() {
    this.imageIndex = this.imageIndex + 1;
    this.item = this.images[this.imageIndex];
  }

  // Prev Image
  prevImage() {
    this.imageIndex = this.imageIndex - 1;
    this.item = this.images[this.imageIndex];
  }

  // Listen to scroll, if is less then 120px from bottom load more gallery
  @HostListener("window:keydown", ['$event'])
  onWindowScroll($event) {
    if($event.key === 'ArrowRight') {
      this.nextImage()
    }
    if($event.key === 'ArrowLeft') {
      this.prevImage()
    }
    if($event.key === 'Escape') {
      this.closeModal();
    }
  }
}
