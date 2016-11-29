import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selection-screen',
  templateUrl: './selection-screen.component.html',
  styleUrls: ['./selection-screen.component.css']
})
export class SelectionScreenComponent implements OnInit {

  currentArchetype;

  constructor() { }

  ngOnInit() {
  }

  onArchetypeSelected(selectedArchetype) {
    console.log('SelectionScreenComponent - archetype selected:', selectedArchetype);
    this.currentArchetype = selectedArchetype;
  }
}
