import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-comment-feed',
  templateUrl: './comment-feed.component.html',
  styleUrls: ['./comment-feed.component.css']
})
export class CommentFeedComponent implements OnInit {
  newComment: string = '';
  comments: Comment[] = [];
  images: ImageWithComments[] = [];
  imageSrc: string = '';
  liked: boolean = false;
  add: any;
  imgaearray: any;

  constructor(private servicedata: ServiceService, private http: HttpClient) {}

  
   ngOnInit(){
    this.getimage();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.imageSrc = URL.createObjectURL(file);
    this.liked = false; // Reset the like status when a new image is uploaded.

    // Store the current image along with its comments
    this.images.push({ src: this.imageSrc, comments: this.comments });

    // Clear the comments for the new image
    this.comments = [];
  }

  postComment() {
    if (this.newComment) {
      this.comments.push({ text: this.newComment, likes: 0 });
      this.newComment = '';

      const data = {
        image: this.imageSrc,
        comment: this.comments};
      this.servicedata.postdata(data).subscribe((res) => {
        console.log('Post data', res);
      });
    }
  }

  

  click(a: any) {
    this.add = a;
    // Assuming "add" is a form control, you can reset it like this
    // this.add.reset();
  }

  likeComment(comment: Comment) {
    comment.likes++;
    
  }

  getimage(){
    this.servicedata.getdata().subscribe(res=>{
      this.imgaearray = res;
      console.log('my data',this.imgaearray)
    })
  }

 
}

interface Comment { // interface has only abstract method means you need to provide implimenation
  text: string;
  likes: number;
}

interface ImageWithComments {
  src: string;
  comments: Comment[];
}
