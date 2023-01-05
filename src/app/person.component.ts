import {Component, NgZone, ViewChild, OnInit, Input, ContentChild, AfterViewInit , TemplateRef, AfterContentInit, ElementRef, Output, EventEmitter} from '@angular/core';
import {ChatService} from '../chat.service';
import {take} from 'rxjs/operators';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import { AppComponent } from './app.component';

import {Moment} from 'moment';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/skipWhile';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/throttleTime';
import moment = require('moment');

@Component({
  selector: 'person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})

export class PersonComponent{
  @Output() public onCloseChild: EventEmitter<any> = new EventEmitter<any>();
  
  // @Input() message: string;
  message: string;
  messages: string[] = [];
  secretCode: string;
  elRef: ElementRef

  constructor(elRef: ElementRef, private chatService: ChatService) {
    this.elRef = elRef;
    this.secretCode = 'DONT TELL';
  }      

  getHtmlContent() {
    return this.elRef.nativeElement.innerHTML;
  }

  sendMessage(){
    this.chatService.sendMessage(this.message);
    this.message = '';
  }
  
  ngOnInit() {
    this.chatService
      .getMessages()
      .distinctUntilChanged()
      .filter((message) => message.trim().length > 0)
      .throttleTime(1000)
      .skipWhile((message) => message !== this.secretCode)
      .scan((acc: string, message: string, index: number) =>
          `${message}(${index + 1})`
        , 1)
      .subscribe((message: string) => {
        const currentTime = moment.format('hh:mm:ss a');
        const messageWithTimestamp = `${currentTime}: ${message}`;
        this.messages.push(messageWithTimestamp);
      });
  }

}
