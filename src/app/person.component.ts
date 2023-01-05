import {Component, ElementRef, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})

export class PersonComponent{
  // @Output() public onCloseChild: EventEmitter<any> = new EventEmitter<any>();

  message: string;
  // messages: string[] = [];
  // secretCode: string;
  elRef: ElementRef

  constructor(elRef: ElementRef) {
    this.elRef = elRef;
  }      

  getHtmlContent() {
    return this.elRef.nativeElement.innerHTML;
  }

  sendMessage(){
    // this.message = document.querySelector("#message").textContent
    this.message = '';
  }

}
