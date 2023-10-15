import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CommentFeedComponent } from './comment-feed/comment-feed.component';

const routes: Routes = [
{ path:'', redirectTo: 'login', pathMatch: 'full'}, // localhost:4200
  {path: 'login', component: LoginPageComponent},
  {path:'account',component: CreateAccountComponent},
  {path:'imagePostPage',component:CommentFeedComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
