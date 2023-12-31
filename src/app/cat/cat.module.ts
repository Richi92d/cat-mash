import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatRoutingModule } from './cat-routing.module';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { PageVoteComponent } from './components/page-vote/page-vote.component';
import { SharedModule } from '../shared/shared.module';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    PageHomeComponent,
    PageVoteComponent
  ],
  imports: [
    CommonModule,
    CatRoutingModule,
    SharedModule,
    MatTabsModule
  ]
})
export class CatModule { }
