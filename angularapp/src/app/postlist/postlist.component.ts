import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { Post } from '../model/post';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

  arrPosts: Post[] = [];
  // DI 
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.GetAllPost().subscribe(res => {
      console.log('from post list', res);
      this.arrPosts = res;
    })
  }

}
