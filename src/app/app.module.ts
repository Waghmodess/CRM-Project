import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { EditComponent } from './edit/edit.component';
import { LandingComponent } from './landing/landing.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OnlineComponent } from './online/online.component';
import { ReEnquriedComponent } from './re-enquried/re-enquried.component';
import { ReferredComponent } from './referred/referred.component';
import { ClosedComponent } from './closed/closed.component';
import { EnrolledComponent } from './enrolled/enrolled.component';
import { InFutureComponent } from './in-future/in-future.component';
import { WalkinComponent } from './walkin/walkin.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    EditComponent,
    LandingComponent,
    OnlineComponent,
    ReEnquriedComponent,
    ReferredComponent,
    ClosedComponent,
    EnrolledComponent,
    InFutureComponent,
    WalkinComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatDialogModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{ }
