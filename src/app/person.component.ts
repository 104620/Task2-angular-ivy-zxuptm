import {Component, NgZone, ViewChild, OnInit} from '@angular/core';
import {take} from 'rxjs/operators';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';

@Component({
  selector: 'person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})

export class PersonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  send(){
    console.log("Send to the history chat")
  }
}
