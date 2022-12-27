import { Component, VERSION } from '@angular/core';
import { PersonComponent } from './person.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  index = 1
  addNewPerson(){
    console.log("Created "+this.index)
    let row = document.createElement('div');  
      row.className = 'row';
      // row.innerHTML = new PersonComponent();
//       row.innerHTML = `
//       <br>
//       <p>new</p>
//       <person></person>`;
            row.innerHTML = `
      <div style="width: 120px">
<mat-form-field appearance="fill">
<mat-label>Autosize textarea</mat-label>
<textarea matInput
          cdkTextareaAutosize
          #autosize="cdkTextareaAutosize"
          cdkAutosizeMinRows="1"
          cdkAutosizeMaxRows="5"></textarea>
</mat-form-field><br>
<button style="border-radius: 10px; margin-left: 100%;" mat-raised-button color="primary" type="submit" id="submit" (click)="send();">
<mat-icon>send</mat-icon>Send
</button>
</div>`;
      row.style.width = '150px';
      row.style.marginLeft = '10%';
      document.querySelector('.showInputField').appendChild(row);
    this.index++
  }
}
