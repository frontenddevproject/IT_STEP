import { Component, Input } from '@angular/core';
import { UserInterface} from 'src/types';
import { UserEditFormComponent } from '../user-edit-form/user-edit-form.component';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  
  @Input() user: UserInterface | null = null;
  @Input() editFields: (keyof UserInterface)[] = [];
 
  isUserDataEditing: boolean = false;

  // showUserData() {
  //   console.log(this.user);
  // }

  toggleIsUserDataEditing() {
    this.isUserDataEditing = !this.isUserDataEditing;

  }

}
