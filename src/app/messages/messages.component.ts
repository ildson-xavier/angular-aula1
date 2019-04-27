import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: string[] = [];

  add(message: string) {
    this.messages.push(message)
  }

  clear() {
    this.messages = [];
  }

  constructor(private messagesService: MessagesService) { }

  ngOnInit() {
  }

}
