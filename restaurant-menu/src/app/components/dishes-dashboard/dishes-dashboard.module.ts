import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DishesDashboardComponent } from './dishes-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
@NgModule({
  declarations: [DishesDashboardComponent],
  imports: [CommonModule, IonicModule,DialogModule,ButtonModule],
  exports: [DishesDashboardComponent],
})
export class DishesDashboardModule {}
