import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-archetype-card',
  templateUrl: './archetype-card.component.html',
  styleUrls: ['./archetype-card.component.css']
})
export class ArchetypeCardComponent implements OnInit {

  @Input('archetypePersonInfo') archetype;

  @Output() archetypeChosen = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  chooseThisArchetype(a) {
    console.log('ArchetypeCardComponent: user clicked archetype', a);
    this.archetypeChosen.emit(a);
  }
}
