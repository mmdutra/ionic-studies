import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatesPageRoutingModule } from './dates-routing.module';

import { DatesPage } from './dates.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DatesPage]
})
export class DatesPageModule {}
