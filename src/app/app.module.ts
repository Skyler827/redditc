import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    CommentListComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
