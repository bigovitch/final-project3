import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-loginbut',
  templateUrl: './loginbut.component.html',
  styleUrls: ['./loginbut.component.scss'],
})
export class LoginbutComponent  {
@Input() label:string;
 

}
