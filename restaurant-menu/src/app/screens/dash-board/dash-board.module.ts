import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashBoardPageRoutingModule } from './dash-board-routing.module';

import { DashBoardPage } from './dash-board.page';
import { DishesDashboardModule } from 'src/app/components/dishes-dashboard/dishes-dashboard.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashBoardPageRoutingModule,
    DishesDashboardModule,
    ReactiveFormsModule
  ],
  declarations: [DashBoardPage]
})
export class DashBoardPageModule {}
