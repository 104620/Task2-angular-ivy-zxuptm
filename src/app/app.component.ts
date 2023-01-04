import { Component, TemplateRef, VERSION, ViewChild, AfterViewInit } from '@angular/core';
import { PersonComponent } from './person.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent{
  @ViewChild(PersonComponent) myTemplate!: PersonComponent;

  index = 1
  personIndex = 1
  col = 1
  person = new PersonComponent();

  ngAfterViewInit() {
    console.log("AJOOJ1")
    let volaco = this.myTemplate.bla()
    console.log(volaco)
  }

  addNewPerson(){

    if(this.index === 4){
      this.index = 1
      this.col++
    }

    let row = document.createElement('div');  
    row.className = 'row';
    row.innerHTML = `<person></person>`
    // this.person.ngAfterContentInit()
    // this.person.ngAfterViewInit()
    document.querySelector('#showInputFieldCol'+this.col).appendChild(row);
      document.querySelector('#showInputFieldCol'+this.col).appendChild(this.person.add(this.personIndex));
    this.index++
    this.personIndex++
  }
}
