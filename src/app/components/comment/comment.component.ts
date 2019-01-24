import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import Comment from '../../comment';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment;
  visible: Boolean = true;
  showReplyForm: Boolean = false;
  replyUsername:FormControl = new FormControl("");
  replyText:FormControl = new FormControl("");
  constructor() { }

  hide() {this.visible = false;}
  show() {this.visible = true;}
  ngOnInit() {}
  reply() {this.showReplyForm = true;}
  cancelReply() {this.showReplyForm = false;}
  submitReply() {
    this.comment.replies.push(new Comment(1,this.replyUsername.value,this.replyText.value,[]));
    this.showReplyForm = false;
    this.replyUsername.setValue("");
    this.replyText.setValue("");
  }
}
