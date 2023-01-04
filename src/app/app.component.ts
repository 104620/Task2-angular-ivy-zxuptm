import { Component, TemplateRef, VERSION, ViewChild, AfterViewInit } from '@angular/core';
import { PersonComponent } from './person.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent{
  @ViewChild(PersonComponent) myTemplate!: PersonComponent;
  volaco = null
  index = 1
  personIndex = 1
  col = 1

  ngAfterViewInit() {
    this.volaco = this.myTemplate.getHtmlContent()
  }

  addNewPerson(){
    if(this.index === 4){
      this.index = 1
      this.col++
    }
    // this.person.bla()
    let row = document.createElement('div');  
    let personHeader = document.createElement('h2');  
    row.className = 'row';
    personHeader.innerHTML = `Person ` + this.personIndex
    let textInput
    textInput = document.createElement('div')
    textInput.style.width = '120px'
    textInput.innerHTML = this.volaco
    personHeader.style.fontSize = '20px'
    row.append(personHeader)
    row.append(textInput)

    document.querySelector('#showInputFieldCol'+this.col).appendChild(row);

    this.index++
    this.personIndex++
  }
}
