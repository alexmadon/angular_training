import { Component, Output, EventEmitter, OnInit } from '@angular/core';

import { SwappDataService } from '../swapp-data.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-archetype-list',
  templateUrl: './archetype-list.component.html',
  styleUrls: ['./archetype-list.component.css']
})
export class ArchetypeListComponent implements OnInit {

  @Output() archetypeSelected = new EventEmitter();

  swappData$: Observable<any>;
  
  constructor( private sds: SwappDataService ) {
  }
  
  ngOnInit() {
    this.swappData$ = this.sds.loadData();
  }

  onArchetypeChosen(newlySelectedArchetype) {
    console.log('ArchetypeListComponent - archetype selected:', newlySelectedArchetype);

    this.archetypeSelected.emit(newlySelectedArchetype);
  }
}
