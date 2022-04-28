import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClosedComponent } from './closed/closed.component';
import { EditComponent } from './edit/edit.component';
import { EnrolledComponent } from './enrolled/enrolled.component';
import { InFutureComponent } from './in-future/in-future.component';
import { LandingComponent } from './landing/landing.component';
import { OnlineComponent } from './online/online.component';
import { PostComponent } from './post/post.component';
import { ReEnquriedComponent } from './re-enquried/re-enquried.component';
import { ReferredComponent } from './referred/referred.component';
import { WalkinComponent } from './walkin/walkin.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'post', component: PostComponent },
  { path: 'edit', component: EditComponent },
  { path: 'walkin', component: WalkinComponent },
  { path: 'in-future', component: InFutureComponent },
  { path: 'enrolled', component: EnrolledComponent },
  { path: 'closed', component: ClosedComponent },
  { path: 'referred', component: ReferredComponent },
  { path: 're-enquried', component: ReEnquriedComponent },
  { path: 'online', component: OnlineComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
