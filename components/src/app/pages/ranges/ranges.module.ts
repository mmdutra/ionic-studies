import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RangesPageRoutingModule } from './ranges-routing.module';

import { RangesPage } from './ranges.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RangesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RangesPage]
})
export class RangesPageModule {}
