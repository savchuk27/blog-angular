import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import {PostsService} from '../../shared/posts.service';
import {Post} from '../shared/interfaces';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  pSub: Subscription;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.pSub = this.postsService.getAll().subscribe(posts => {
      this.posts = posts;
    });
  }

  // tslint:disable-next-line:typedef
  ngOnDestroy() {
    if (this.pSub){
      this.pSub.unsubscribe();
    }
  }


  // tslint:disable-next-line:typedef
  remove(id: string) {

  }
}
