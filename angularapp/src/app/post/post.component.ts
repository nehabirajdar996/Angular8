import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  
//inject the post service
  constructor(private postService : PostService) { }

  ngOnInit() {
    this.postService.GetAllPost().subscribe(res => {
      console.log('get all posts', res);
  })

}
}
