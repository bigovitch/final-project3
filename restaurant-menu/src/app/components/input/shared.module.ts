import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { InputComponent } from './input.component';
import { LoginbutComponent } from '../loginbut/loginbut.component';

@NgModule({
  declarations: [InputComponent,LoginbutComponent],
  imports: [CommonModule, IonicModule],
  exports: [InputComponent , LoginbutComponent],
})
export class SharedModule {}
