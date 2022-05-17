import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ClosedComponent } from './closed/closed.component';
import { DripMarketingComponent } from './drip-marketing/drip-marketing.component';
import { EditComponent } from './edit/edit.component';
import { EnrolledComponent } from './enrolled/enrolled.component';
import { FailedLeadsComponent } from './failed-leads/failed-leads.component';
import { InFutureComponent } from './in-future/in-future.component';
import { LandingComponent } from './landing/landing.component';
import { MarketingComponent } from './marketing/marketing.component';
import { MyFollowupsComponent } from './my-followups/my-followups.component';
import { OnlineComponent } from './online/online.component';
import { PostComponent } from './post/post.component';
import { ReEnquriedComponent } from './re-enquried/re-enquried.component';
import { ReferredComponent } from './referred/referred.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';
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
  { path: 'online', component: OnlineComponent },

  { path: 'my-followups', component: MyFollowupsComponent },
  { path: 'chat-list', component: ChatListComponent },
  { path: 'failed-leads', component: FailedLeadsComponent },
  { path: 'marketing', component: MarketingComponent },
  { path: 'drip-marketing', component: DripMarketingComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'settings', component: SettingsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
