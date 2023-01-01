import { Component, VERSION } from '@angular/core';
import { PersonComponent } from './person.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  index = 1
  personIndex = 1
  col = 1
  person = new PersonComponent();

  addNewPerson(){
    if(this.index === 4){
      this.index = 1
      this.col++
    }
    console.log("Created "+this.index)
      document.querySelector('#showInputFieldCol'+this.col).appendChild(this.person.add(this.personIndex));

    this.index++
    this.personIndex++
  }
}
