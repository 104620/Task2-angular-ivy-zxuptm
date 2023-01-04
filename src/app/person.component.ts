import {Component, NgZone, ViewChild, OnInit, Input, ContentChild, AfterViewInit , TemplateRef, AfterContentInit, ElementRef} from '@angular/core';
import {take} from 'rxjs/operators';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import { AppComponent } from './app.component';

@Component({
  selector: 'person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})

export class PersonComponent{
  elRef: ElementRef
  @Input() message: string;
  constructor(elRef: ElementRef) {
    this.elRef = elRef;
  }      

  getHtmlContent() {
    return this.elRef.nativeElement.innerHTML;
  }

  send(){
    console.log("Send to the history chat")
  }

  bla(){
    console.log("HEHEHEH")
  }
}
