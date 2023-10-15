import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-comment-feed',
  templateUrl: './comment-feed.component.html',
  styleUrls: ['./comment-feed.component.css']
})
export class CommentFeedComponent {
  newComment: string = '';
  comments: Comment[] = [];
  images: ImageWithComments[] = [];
  imageSrc: string = '';
  liked: boolean = false;
  add: any;

  constructor(private servicedata: ServiceService, private http: HttpClient) {}

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
        
      };

  
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
    this.liked = true;
  }
}

interface Comment {
  text: string;
  likes: number;
}

interface ImageWithComments {
  src: string;
  comments: Comment[];
}
