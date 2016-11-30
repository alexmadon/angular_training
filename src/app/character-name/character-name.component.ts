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

  quality: string;

  ngOnInit() {
    this.characterNameFormGroup = this.fb.group({
      characterName: [

        // Initial value
        '',

        // Validators
        [
          Validators.minLength(5),
          Validators.required
        ]

      ]
    });
/*
    this.characterNameFormGroup.controls.characterName.valueChanges
      .subscribe(
        newControlValue => {
          console.log('Character name is now ', newControlValue);
          if (newControlValue.length > 7) {
            this.quality = 'Good!';
          }
          else {
            this.quality = 'Eh, not so good';
          }
        }
      );
*/
    this.characterNameFormGroup.valueChanges.subscribe(
      entireForm => console.log('Entire form:', entireForm)
    );


  }

}
