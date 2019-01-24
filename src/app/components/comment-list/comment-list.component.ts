import { Component, OnInit } from '@angular/core';
import  { FormControl } from '@angular/forms';

import Comment from '../../comment';
@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {
  comments: Array<Comment> = [];
  showReplyForm: Boolean = false;
  replyUsername:FormControl = new FormControl("");
  replyText:FormControl = new FormControl("");
  constructor() { }
  ngOnInit() {
    this.comments = [];
  }
  addComment() {this.showReplyForm = true;}
  cancelReply() {
    this.replyUsername.setValue("");
    this.replyText.setValue("");
    this.showReplyForm = false;
  }
  submitReply() {
    this.comments.push(new Comment(
      1,this.replyUsername.value,this.replyText.value,[]));
    this.cancelReply();
  }
}
