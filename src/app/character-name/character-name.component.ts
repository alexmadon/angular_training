import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { 
@Component({
  selector: 'app-character-name',
  templateUrl: './character-name.component.html',
  styleUrls: ['./character-name.component.css']
})
export class CharacterNameComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.characterNameFormGroup = this.fb.group({
      characterName: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

}
