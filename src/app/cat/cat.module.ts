import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatRoutingModule } from './cat-routing.module';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { PageVoteComponent } from './components/page-vote/page-vote.component';


@NgModule({
  declarations: [
    PageHomeComponent,
    PageVoteComponent
  ],
  imports: [
    CommonModule,
    CatRoutingModule
  ]
})
export class CatModule { }
