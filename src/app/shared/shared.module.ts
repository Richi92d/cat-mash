import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateCatHomepageComponent } from './templates/template-cat-homepage/template-cat-homepage.component';
import { TemplateVoteComponent } from './templates/template-vote/template-vote.component';
import { TemplateTableComponent } from './templates/template-table/template-table.component';

@NgModule({
  declarations: [
    TemplateCatHomepageComponent,
    TemplateVoteComponent,
    TemplateTableComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TemplateCatHomepageComponent,
    TemplateVoteComponent,
    TemplateTableComponent]
})
export class SharedModule { }
