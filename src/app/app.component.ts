import { splitClasses } from '@angular/compiler';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  image1 = "../assets/images/ethan-robertson-SYx3UCHZJlo-unsplash.jpg";
  image2 = "../assets/images/minimalist-desktop-5.jpg";
  image3 = "../assets/images/minimalist-desktop-10.jpg";
  image4 = "../assets/images/joshua-sortino-xZqr8WtYEJ0-unsplash.jpg"
  image5 = "../assets/images/4k-desktop-wallpaper.-2560×1440.jpg";
  image6 = "../assets/images/1335039.webp";
  
  imageCollection = [{ image: this.image1, imageFlag: false },
  { image: this.image2, imageFlag: false },
  { image: this.image3, imageFlag: false },
  { image: this.image4, imageFlag: false },
  { image: this.image5, imageFlag: false },
  { image: this.image6, imageFlag: false },
  ]
  firstRowImageArray = [this.imageCollection]
  length = this.imageCollection.length
  showImage(value: any, index: number) {
    for (let i = 0; i < this.imageCollection.length; i++) {
      if (this.imageCollection[i].imageFlag === true) {
        this.imageCollection.splice(i, 1);
      }
    }
      if (index != this.imageCollection.length - 1) {
        for (let i = 3; i <= this.imageCollection.length; i += 3) {
          if (index < i) {
            let arrayIndex = i - index;
            let finalIndex = index + arrayIndex;
            this.imageCollection.splice(finalIndex, 0, { image: value, imageFlag: true, })
            break;
          }
          else
            if (i + 3 > this.imageCollection.length) {
              console.log("aslkdjasdkljaks");
              this.imageCollection.splice(this.length, 0, { image: value, imageFlag: true, })
              break;
            }
        }
      } else {
        console.log("aslkdjasdkljaks");
        
        this.imageCollection.splice(this.length, 0, { image: value, imageFlag: true, })
      }
  }
}