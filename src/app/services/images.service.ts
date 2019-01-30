import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  hostUrl: string = './assets/mock/images.json';

  constructor(private http: HttpClient) {}

  // Get Images from Mock JSON
  public getImages() {
    return this.http.get(this.hostUrl);
  }

}
