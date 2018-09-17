import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './component/users/users.component';
import { DetailsComponent } from './component/details/details.component';
import { PostsComponent } from './component/posts/posts.component';

const routes: Routes = [{
  path: '',
  component: UsersComponent
},
{
  path: 'user/details/:id',
  component: DetailsComponent
},
{
  path: 'posts',
  component: PostsComponent
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
