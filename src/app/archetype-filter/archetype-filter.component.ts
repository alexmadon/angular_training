import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archetype-filter',
  templateUrl: './archetype-filter.component.html',
  styleUrls: ['./archetype-filter.component.css']
})
export class ArchetypeFilterComponent implements OnInit {

  filterProperties = {
    sex: ''
  };

  constructor() { }

  ngOnInit() {
  }

  setSex(selectedSex) {
    console.log('Set sex to ' + selectedSex);
    this.filterProperties.sex = selectedSex;
  }

}
