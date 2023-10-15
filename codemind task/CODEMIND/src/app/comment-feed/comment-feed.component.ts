import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
  addcomment:any
  add:any
 allDetails:any 
 file:any

  constructor(private servicedata:ServiceService,private http:HttpClient){
    console.log(this.images)
    this.get();
    console.log("my image hi",this.allDetails)

  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    // You can send the file to your server using HttpClient
    this.http.post('./src/assets/images', formData).subscribe(
      (response) => {
        console.log('File uploaded successfully:', response);
      },
      
(error) => {
        console.error('Error uploading file:', error);
      }
    );
  }

  postComment() {
    if (this.newComment) {
      this.comments.push({ text: this.newComment, likes: 0 });
      this.newComment = '';
      
        let data={
          'image':this.file.name,
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
}
  get(){

    this.servicedata.getdata().subscribe((res:object)=>{
      console.log('get data',res);
      this.allDetails = res;
      console.log("my image hi",this.allDetails)

      // this.alldata=res
      // console.log(this.alldata);
      
    })
  
  }

  click(a:any)
  {
this.add = a;
this.add.reset
  }
  likeComment(comment: Comment) {
    comment.likes++;
    this.liked = true;
  }

  unlikeComment(comment: Comment) {
    comment.likes--;
    this.liked = false;
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

