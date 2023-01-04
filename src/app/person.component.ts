import {Component, NgZone, ViewChild, OnInit, Input, ContentChild, AfterViewInit , TemplateRef, AfterContentInit, ElementRef, Output, EventEmitter} from '@angular/core';
import {ChatService} from '../chat.service';
import {take} from 'rxjs/operators';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import { AppComponent } from './app.component';

@Component({
  selector: 'person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})

export class PersonComponent{
  @Output() public onCloseChild: EventEmitter<any> = new EventEmitter<any>();
  
  
  // @Input() message: string;
  message: string;
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
  
}
