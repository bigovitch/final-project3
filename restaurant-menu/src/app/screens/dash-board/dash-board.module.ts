import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashBoardPageRoutingModule } from './dash-board-routing.module';

import { DashBoardPage } from './dash-board.page';
import { DishesDashboardModule } from 'src/app/components/dishes-dashboard/dishes-dashboard.module';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashBoardPageRoutingModule,
    DishesDashboardModule,
    ReactiveFormsModule,
    DialogModule,
    ButtonModule

  ],
  declarations: [DashBoardPage]
})
export class DashBoardPageModule {}
