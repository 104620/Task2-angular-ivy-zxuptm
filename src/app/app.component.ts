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
      row.innerHTML = new PersonComponent();
//       row.innerHTML = `
//       <br>
//       <p>new</p>
//       <person></person>`;
      row.style.width = '150px';
      row.style.marginLeft = '10%';
      document.querySelector('.showInputField').appendChild(row);
    this.index++
  }
}
