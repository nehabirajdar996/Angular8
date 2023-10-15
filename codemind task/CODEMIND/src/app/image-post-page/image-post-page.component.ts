import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-image-post-page',
  templateUrl: './image-post-page.component.html',
  styleUrls: ['./image-post-page.component.css']
})
export class ImagePostPageComponent {

  images:any
  imageSrc:any
  liked:any
  imageUrl: any;
  comments: any;

post!:FormGroup;
  
constructor(private fb: FormBuilder,private servicedata:ServiceService) {}

ngOnInit(): void {
  this.post = this.fb.group({
    saySomething: ['',],
    image: ['',]
    // image: [null] // Use null as the initial value for the file input
});

  }
  postComment() {
        let data={
          'image':this.images,
          'comment':this.comments
        }
      this.servicedata.postdata(data).subscribe(res=>{
        console.log('post data',res);
      })
      // setTimeout(() => {
      //   this.get()
      // }, 500);
      ///for getting updated value too
    }
      
    onFileSelected(event: any) {
      const file = event.target.files[0];
      this.imageSrc = URL.createObjectURL(file);
      this.liked = false;
  
      // Store the current image and its comments
      this.images.push({ src: this.imageSrc, comments: [...this.comments] });
  
      // Clear the comments for the new image
      this.comments = [];
    }

  onSave() {
    // Here, you can use this.imageUrl and this.comment for further processing
    console.log('Image URL:'),
console.log('Image URL:', this.imageUrl);
    console.log('Comment:', this.comments);
    
  }
}
