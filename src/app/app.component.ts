import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  index = 1
  addNewPerson(){
    console.log("Created"+this.index.toString)
    let row = document.createElement('div');  
      row.className = 'row';
      row.innerHTML = `
      <br>
      <person></person>`;
      document.querySelector('.showInputField').appendChild(row);
    this.index++
  }
}
