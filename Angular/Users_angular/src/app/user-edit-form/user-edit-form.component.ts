import { Component, Input } from '@angular/core';
import { UserInterface, UserWithoutFieldsInterface, ignoredField  } from 'src/types';


@Component({
  selector: 'app-user-edit-form',
  templateUrl: './user-edit-form.component.html',
  styleUrls: ['./user-edit-form.component.css']
})
export class UserEditFormComponent {

  @Input() user: UserInterface | null = null;
  @Input() editFields: (keyof UserWithoutFieldsInterface)[] = [];
  

  ignoreFields: ignoredField = ["company", "geo", "address"]

  filteredFields(user: UserInterface) {
    this.editFields = [];
    let key: keyof UserInterface;
    let keyOfEditField: any;
    if (user) {
      for (key in user) {
        if (typeof user[key] !== "number" 
          && !this.ignoreFields.includes(key) ) {
            keyOfEditField = key;
          this.editFields.push(keyOfEditField)
        }
      }
      console.log(this.editFields);
    }
  }
  }


 
