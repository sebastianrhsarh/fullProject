import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { UserComponent } from './components/user/user.component';
import { PostIdComponent } from './components/post-id/post-id.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: '', pathMatch: 'full', redirectTo: ''},
  { path: 'users', component: UserComponent },
  { path: 'posts/:id', component: PostIdComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
