import {Component, NgZone, ViewChild, OnInit, Input} from '@angular/core';
import {take} from 'rxjs/operators';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';

@Component({
  selector: 'person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})

export class PersonComponent{

  @Input() message: string;
  
  add(personIndex){
    let row = document.createElement('div');  
    row.className = 'row';
    row.innerHTML = `
    <div style="width: 120px">
    <mat-form-field appearance="fill">
    <mat-label>Person `+personIndex+`</mat-label>
    <textarea matInput
              cdkTextareaAutosize
              #autosize="cdkTextareaAutosize"
              cdkAutosizeMinRows="1"
              cdkAutosizeMaxRows="5">
    
    </textarea>
    </mat-form-field><br>
    <button style="border-radius: 10px; margin-left: 100%;" mat-raised-button color="primary" type="submit" id="submit" (click)="send();">
    <mat-icon>send</mat-icon>Send
    </button>
    </div>`;
    row.style.width = '150px';
    row.style.marginLeft = '10%';
    return row
  }

  send(){
    console.log("Send to the history chat")
  }
}
